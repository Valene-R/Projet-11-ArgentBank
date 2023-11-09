import React, { useEffect, useState } from 'react';  
import Router from './router/Router';

import { useDispatch } from 'react-redux';
import { saveToken } from "./reducers/token";  
import Loader from './components/loader/Loader';


const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fonction pour charger l'état initial de l'application
    const loadInitialState = () => {
      const token = localStorage.getItem("token");
      if (token) {
        // Remise dans redux du token sauvegardé dans le localStorage
        dispatch(saveToken(token));
      }
      // Ajoute un délai pour voir le loader
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Durée de 3 secondes
      return () => clearTimeout(timeoutId); // Fonction de nettoyage
    };

    loadInitialState();
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Router />
    </div>
  );
};

export default App;