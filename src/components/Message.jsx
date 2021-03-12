import React, { useState } from 'react';
import { dbService, storageService } from '../fbInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';

import EditMessage from './EditMessage';

const Message = ({ msgObj, isOwner }) => {
  const [edit, setEdit] = useState(false);

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

  return (
    <>
      <div className="messages-body">
        {edit ? (
          <EditMessage msgObj={msgObj} toggleHandler={toggleHandler} />
        ) : (
          <>
            <div className="message-item">
              <h3>{msgObj.text}</h3>
              {isOwner ? (
                <>
                  {msgObj.imageUrl && (
                    <img
                      src={msgObj.imageUrl}
                      width="50px"
                      height="50px"
                      className="owner-img"
                    />
                  )}
                </>
              ) : (
                <>
                  {msgObj.imageUrl && (
                    <img
                      src={msgObj.imageUrl}
                      width="50px"
                      height="50px"
                      className="others-img"
                    />
                  )}
                </>
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
