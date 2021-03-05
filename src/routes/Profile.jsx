import React, { useState } from 'react';

import { storageService } from '../fbInstance';
import uuid from 'uuid/dist/v4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [image, setImage] = useState('');

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
      // store attachment in the fire storage
      const imageRef = storageService
        .ref()
        .child(`${userObj.uid}-profile/${uuid()}`);
      const response = await imageRef.putString(image, 'data_url');
      console.log(response);
      imageUrl = await response.ref.getDownloadURL();
    }
    console.log(userObj.photoURL, 'photoURL');
    console.log(userObj.photoURL.search('.com'), '진위여부');

    if (userObj.displayName !== newDisplayName || image) {
      if (imageUrl !== '') {
        if (userObj.photoURL.search('firebase') > 0) {
          await storageService.refFromURL(userObj.photoURL).delete();
        }

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
      <div className="profile-container">
        <form onSubmit={onSubmit} className="profile">
          <div className="image">
            {image ? (
              <div id="image">
                <img
                  src={image}
                  width="100px"
                  height="100px"
                  style={{ borderRadius: '50%' }}
                  className="new-image"
                />
                <span onClick={imageClear}>
                  Remove &nbsp;
                  <FontAwesomeIcon icon={faTimes} className="clear-icon" />
                </span>
              </div>
            ) : (
              <div>
                <img
                  src={userObj.photoURL}
                  width="100px"
                  height="100px"
                  style={{ borderRadius: '50%' }}
                />
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="Display Name"
            value={newDisplayName}
            onChange={onChange}
          />
          <label for="image-add" className="image-add-label">
            <span>Add photo</span>
            <FontAwesomeIcon icon={faPlus} style={{ marginLeft: '10px' }} />
          </label>
          <input
            id="image-add"
            type="file"
            accept="image/*"
            onChange={onFileChange}
            className="file-input"
          />
          <input type="submit" value="Update" className="update-button" />
        </form>
      </div>
    </>
  );
};
export default Profile;
