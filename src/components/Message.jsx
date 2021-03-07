import React, { useState } from 'react';
import { dbService, storageService } from '../fbInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';

const Message = ({ msgObj, isOwner }) => {
  const [edit, setEdit] = useState(false);
  const [newMsg, setNewMsg] = useState(msgObj.text);

  const onDeleteClick = async () => {
    const check = window.confirm(
      'Are you sure you want to delete this message?'
    );
    if (check) {
      // delete attachment
      if (msgObj.imageUrl !== '') {
        await storageService.refFromURL(msgObj.imageUrl).delete();
      }

      // delete message
      await dbService.doc(`aweets/${msgObj.id}`).delete();
    }
  };

  const toggleHandler = () => setEdit(!edit);

  const onChange = e => {
    const {
      target: { value },
    } = e;
    setNewMsg(value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    await dbService.doc(`aweets/${msgObj.id}`).update({
      text: newMsg,
    });
    setEdit(false);
  };

  return (
    <>
      <div className="messages-body">
        {edit ? (
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
                <input type="submit" value="Update" className="update-button" />
              </form>
              <button onClick={toggleHandler}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <div className="message-item">
              <h3>{msgObj.text}</h3>
              {msgObj.imageUrl && (
                <img src={msgObj.imageUrl} width="50px" height="50px" />
              )}
              {isOwner && (
                <div className="message-option">
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={onDeleteClick}
                    style={{ marginRight: '5px' }}
                    size="xs"
                  />
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={toggleHandler}
                    size="xs"
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Message;
