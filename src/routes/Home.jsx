import React, { useEffect, useState } from 'react';
import Message from '../components/Message';
import { dbService, storageService } from '../fbInstance';

import MessageFactory from '../components/MessageFactory';

const Home = ({ userObj }) => {
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
    // new way!! (database listener)
    dbService
      .collection('aweets')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const msgArray = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        setMsgs(msgArray);
      });
  }, []);

  return (
    <>
      <MessageFactory userObj={userObj} />
      <div>
        {msgs.map(msg => (
          <Message
            key={msg.id}
            msgObj={msg}
            isOwner={msg.creatorId === userObj.uid}
          />
        ))}
      </div>
    </>
  );
};
export default Home;
