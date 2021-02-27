import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { authService, dbService } from '../fbInstance';

const Profile = ({ userObj }) => {
  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push('/');
  };

  const getMyMessages = async () => {
    const messages = await dbService
      .collection('aweets')
      .where('creatorId', '==', userObj.uid)
      .orderBy('createdAt', 'desc')
      .get();
    console.log(
      messages.docs.map(doc => doc.data()),
      'messages'
    );
  };

  useEffect(() => {
    getMyMessages();
  }, []);

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
