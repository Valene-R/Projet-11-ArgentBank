import React, { useEffect, useState } from 'react';  
import Router from './router/Router';

import { useDispatch } from 'react-redux';
import { saveToken } from "./reducers/token";  


const App = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Remise dans redux du token sauvegardé dans le localStorage
      dispatch(saveToken(token));
    }

    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Router />
    </div>
  );
};

export default App;