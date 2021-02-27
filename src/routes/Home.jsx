import React, { useEffect, useState } from 'react';
import Message from '../components/Message';
import { dbService, storageService } from '../fbInstance';
import uuid from 'uuid/dist/v4';

const Home = ({ userObj }) => {
  const [msg, setMsg] = useState('');
  const [msgs, setMsgs] = useState([]);
  const [image, setImage] = useState('');

  /*
  // old way
  const getMsgs = async () => {
    const data = await dbService.collection('aweets').get();
    data.forEach(doc => {
      const msgObject = {
        ...doc.data(),
        id: doc.id,
      };
      setMsgs(prev => [msgObject, ...prev]);
    });
  };

  console.log(msgs);
*/
  useEffect(() => {
    // getMsgs();
    // new way!! (database listener)
    dbService.collection('aweets').onSnapshot(snapshot => {
      const msgArray = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });
      setMsgs(msgArray);
    });
  }, []);

  const onChange = e => {
    const {
      target: { value },
    } = e;
    setMsg(value);
  };

  const onFileChange = e => {
    const {
      target: { files },
    } = e;
    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = finishedevent => {
      const {
        target: { result },
      } = finishedevent;
      setImage(result);
    };
    reader.readAsDataURL(file);
  };

  const imageClear = () => setImage('');

  const onSubmit = async e => {
    e.preventDefault();
    let imageUrl = '';
    if (image !== '') {
      const imageRef = storageService.ref().child(`${userObj.uid}/${uuid()}`);
      const response = await imageRef.putString(image, 'data_url');
      imageUrl = await response.ref.getDownloadURL();
    }
    const msgObj = {
      text: msg,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      imageUrl,
    };
    await dbService.collection('aweets').add(msgObj);
    setMsg('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={msg}
          placeholder="What's on your mind?"
          onChange={onChange}
          maxLength={120}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Aweet" />
        {image && (
          <div>
            <img src={image} width="50px" height="50px" />
            <button onClick={imageClear}>Clear</button>
          </div>
        )}
      </form>
      <div>
        {msgs.map(msg => (
          <Message
            key={msg.id}
            msgObj={msg}
            isOwner={msg.creatorId === userObj.uid}
          />
        ))}
      </div>
    </>
  );
};
export default Home;
