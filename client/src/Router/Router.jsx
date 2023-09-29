import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import User from '../pages/User/User';
import { ROUTES } from '../Router/routes';

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