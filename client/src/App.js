import React, { useEffect } from 'react';  
import Router from './router/Router';
import { GlobalStyle } from './styles/globalStyle';
import { useDispatch } from 'react-redux';  
import { fetchProfile } from './reducers/authSlice';  

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    // Si un token est présent, dispatch l'action pour récupérer le profil de l'utilisateur
    if (token) {
      dispatch(fetchProfile());
    }
  }, [dispatch]); // Exécute useEffect une fois lors de la montée du composant car 'dispatch' est stable

  return (
    <div>
      <Router />
      <GlobalStyle />
    </div>
  );
};

export default App;