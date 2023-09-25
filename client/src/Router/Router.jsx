import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import User from '../pages/User';
import {ROUTES} from './routes';

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