import React, { useState } from 'react';
import uuid from 'uuid/dist/v4';
import { dbService, storageService } from '../fbInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const EditMessage = ({ msgObj, toggleHandler }) => {
  const [newMsg, setNewMsg] = useState(msgObj.text);
  const [newImage, setNewImage] = useState('');

  const imageClear = () => setNewImage('');

  const deleteExistImage = async () => {
    const check = window.confirm(
      'Are you sure you want to delete this message?'
    );
    if (check) {
      if (msgObj.imageUrl !== '') {
        await storageService.refFromURL(msgObj.imageUrl).delete();
        await dbService.doc(`aweets/${msgObj.id}`).update({
          imageUrl: '',
        });
      }
    }
  };

  const onChange = e => {
    const {
      target: { value },
    } = e;
    setNewMsg(value);
  };

  const onFileChange = e => {
    const {
      target: { files },
    } = e;
    const file = files[0];
    const reader = new FileReader();
    // This event occurs when the read file action finished (2)
    reader.onloadend = finishedevent => {
      const {
        target: { result },
      } = finishedevent;
      console.log(result, 'result');
      setNewImage(result);
    };
    // Read file from specific URL (1)
    reader.readAsDataURL(file);
  };

  const onSubmit = async e => {
    e.preventDefault();
    let imageUrl = '';
    if (newImage !== '') {
      const imageRef = storageService
        .ref()
        .child(`${msgObj.creatorId}/${uuid()}`);
      const response = await imageRef.putString(newImage, 'data_url');
      console.log(response, 'response');
      imageUrl = await response.ref.getDownloadURL();
    }

    if (msgObj.text !== newMsg || newImage) {
      if (imageUrl !== '') {
        if (msgObj.imageUrl !== '') {
          // delete previous imagefile in the storage
          await storageService.refFromURL(msgObj.imageUrl).delete();
        }

        await dbService.doc(`aweets/${msgObj.id}`).update({
          text: newMsg,
          imageUrl,
        });
        imageClear();
      } else {
        await dbService.doc(`aweets/${msgObj.id}`).update({
          text: newMsg,
        });
      }
    }

    toggleHandler();
  };

  return (
    <>
      <div className="message-update">
        <form onSubmit={onSubmit} className="update-form">
          <input
            type="text"
            placeholder="Edit your message"
            value={newMsg}
            onChange={onChange}
            required
            className="update-input"
          />
          {newImage ? (
            <>
              <div className="image-exists">
                <img
                  src={newImage}
                  width="50px"
                  height="50px"
                  style={{ borderRadius: '20px' }}
                  className="new-image"
                />
                <span onClick={imageClear}>
                  Undo &nbsp;
                  <FontAwesomeIcon
                    icon={faTimes}
                    size="xs"
                    className="clear-icon"
                  />
                </span>
              </div>
            </>
          ) : (
            msgObj.imageUrl && (
              <>
                <div className="image-exists">
                  <img
                    src={msgObj.imageUrl}
                    width="50px"
                    height="50px"
                    style={{ borderRadius: '20px' }}
                  />
                  <span onClick={deleteExistImage}>
                    Delete &nbsp;
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      size="xs"
                      className="clear-icon"
                    />
                  </span>
                </div>
              </>
            )
          )}
          <div className="edit-image">
            <label for="image-update" className="image-update-label">
              <span>Edit photo</span>
              <FontAwesomeIcon icon={faPlus} style={{ marginLeft: '10px' }} />
            </label>
            <input
              id="image-update"
              type="file"
              accept="image/*"
              onChange={onFileChange}
              className="file-input"
            />
          </div>

          <input type="submit" value="Update" className="update-button" />
        </form>
        <button onClick={toggleHandler}>Cancel</button>
      </div>
    </>
  );
};

export default EditMessage;
