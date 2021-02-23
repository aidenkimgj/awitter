import React, { useState } from 'react';
import { dbService } from '../fbInstance';

const Message = ({ msgObj, isOwner }) => {
  const [edit, setEdit] = useState(false);
  const [newMsg, setNewMsg] = useState(msgObj.text);

  const onDeleteClick = async () => {
    const check = window.confirm(
      'Are you sure you want to delete this message?'
    );
    if (check) {
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
      {edit ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your message"
              value={newMsg}
              onChange={onChange}
              required
            />
            <input type="submit" value="Update Message" />
          </form>
          <button onClick={toggleHandler}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{msgObj.text}</h4>
          {isOwner && (
            <div>
              <button onClick={onDeleteClick}>Delete Message</button>
              <button onClick={toggleHandler}>Edit Message</button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Message;