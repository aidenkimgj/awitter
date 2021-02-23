import React, { useEffect, useState } from 'react';
import { dbService } from '../fbInstance';

const Home = ({ userObj }) => {
  const [msg, setMsg] = useState('');
  const [msgs, setMsgs] = useState([]);

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
  const onSubmit = async e => {
    e.preventDefault();
    await dbService.collection('aweets').add({
      text: msg,
      createdAt: Date.now(),
      creator: userObj.uid,
    });
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
        <input type="submit" value="Aweet" />
      </form>
      <div>
        {msgs.map(msg => (
          <div key={msg.id}>
            <h4>{msg.text}</h4>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
