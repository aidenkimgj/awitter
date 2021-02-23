import React, { useEffect, useState } from 'react';
import { dbService } from '../fbInstance';

const Home = () => {
  const [msg, setMsg] = useState('');
  const [msgs, setMsgs] = useState([]);

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

  useEffect(() => {
    getMsgs();
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
      <div>
        {msgs.map(msg => (
          <div key={msg.id}>
            <h4>{msg.msg}</h4>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
