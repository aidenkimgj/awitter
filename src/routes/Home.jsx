import React, { useState } from 'react';
import { dbService } from '../fbInstance';

const Home = () => {
  const [msg, setMsg] = useState('');
  const onChange = e => {
    const {
      target: { value },
    } = e;
    setMsg(value);
  };
  const onSubmit = async e => {
    e.preventDefault();
    await dbService.collection('aweets').add({
      msg,
      createdAt: Date.now(),
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
    </>
  );
};
export default Home;
