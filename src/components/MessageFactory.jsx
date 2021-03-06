import React, { useState } from 'react';
import { dbService, storageService } from '../fbInstance';
import uuid from 'uuid/dist/v4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const MessageFactory = ({ userObj }) => {
  const [msg, setMsg] = useState('');
  const [image, setImage] = useState('');

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
      // store attachment in the fire storage
      const imageRef = storageService.ref().child(`${userObj.uid}/${uuid()}`);
      const response = await imageRef.putString(image, 'data_url');
      console.log(response);
      imageUrl = await response.ref.getDownloadURL();
    }

    if (msg === '') {
      return alert('Please write anything!');
    } else {
      const msgObj = {
        text: msg,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        imageUrl,
      };
      await dbService.collection('aweets').add(msgObj);
      setMsg('');
      imageClear();
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="create-message">
        <div className="message-input-container">
          <input
            className="message-input"
            type="text"
            value={msg}
            placeholder="What's on your mind?"
            onChange={onChange}
            maxLength={120}
          />
          <input type="submit" value="post" className="message-post" />
        </div>

        <label for="attach-image" className="image-add-label">
          <span>Add photo</span>

          <FontAwesomeIcon icon={faPlus} style={{ marginLeft: '10px' }} />
        </label>
        <input
          id="attach-image"
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />

        {image && (
          <div className="image-display">
            <img src={image} width="80px" height="80px" />
            <span onClick={imageClear}>
              Remove &nbsp;
              <FontAwesomeIcon icon={faTimes} className="clear-icon" />
            </span>
          </div>
        )}
      </form>
    </>
  );
};

export default MessageFactory;
