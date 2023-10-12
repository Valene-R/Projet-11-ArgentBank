import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import SignIn from '../pages/signIn/SignIn';
import User from '../pages/user/User';
import { ROUTES } from '../router/routes';

const Router = () => {
  return (
  	<div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}/>
        <Route path={ROUTES.SIGNIN} element={<SignIn />}/>
        <Route path={ROUTES.USER} element={<User />}/>
      </Routes>
    </div>
  );
};

export default Router;
