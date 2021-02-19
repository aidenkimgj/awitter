import React, { useState } from 'react';
import AppRouter from './Router';
import { authService } from '../fbInstance';

import Footer from './Footer';

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  console.log(authService.currentUser, 'user');
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <Footer />
    </>
  );
};
