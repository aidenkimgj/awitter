import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authService, dbService, storageService } from '../fbInstance';
import uuid from 'uuid/dist/v4';

const Profile = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [image, setImage] = useState('');

  const onLogOutClick = () => {
    authService.signOut();
    history.push('/');
  };

  const onChange = e => {
    const {
      target: { value },
    } = e;
    setNewDisplayName(value);
  };

  const onFileChange = e => {
    const {
      target: { files },
    } = e;
    const file = files[0];
    const reader = new FileReader();
    // This event occurs when the read file action finished
    reader.onloadend = finishedevent => {
      const {
        target: { result },
      } = finishedevent;
      console.log(result, 'result');
      setImage(result);
    };
    // Read file from specific URL
    reader.readAsDataURL(file);
  };

  const imageClear = () => setImage('');

  const onSubmit = async e => {
    e.preventDefault();
    let imageUrl = '';
    if (image !== '') {
      await storageService.refFromURL(userObj.photoURL).delete();
      // store attachment in the fire storage
      const imageRef = storageService
        .ref()
        .child(`${userObj.uid}-profile/${uuid()}`);
      const response = await imageRef.putString(image, 'data_url');
      console.log(response);
      imageUrl = await response.ref.getDownloadURL();
    }
    console.log(userObj.photoURL, 'photoURL');

    if (userObj.displayName !== newDisplayName || image) {
      if (imageUrl !== '') {
        await userObj.updateProfile({
          displayName: newDisplayName,
          photoURL: imageUrl,
        });
      } else {
        await userObj.updateProfile({
          displayName: newDisplayName,
        });
      }
      refreshUser();
    }
  };

  // const getMyMessages = async () => {
  //   const messages = await dbService
  //     .collection('aweets')
  //     .where('creatorId', '==', userObj.uid)
  //     .orderBy('createdAt', 'desc')
  //     .get();
  //   console.log(
  //     messages.docs.map(doc => doc.data()),
  //     'messages'
  //   );
  // };

  // useEffect(() => {
  //   getMyMessages();
  // }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        {image ? (
          <div>
            <img src={image} width="50px" height="50px" />
            <button onClick={imageClear}>Clear</button>
          </div>
        ) : (
          <div>
            <img src={userObj.photoURL} width="50px" height="50px" />
          </div>
        )}
        <input
          type="text"
          placeholder="Display Name"
          value={newDisplayName}
          onChange={onChange}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Update" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
