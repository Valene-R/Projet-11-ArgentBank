import React, { useEffect } from 'react';  
import Router from './router/Router';
import { GlobalStyle } from './styles/globalStyle';
import { useDispatch } from 'react-redux';  
import { fetchProfile } from './reducers/authActions';  
import { getToken, removeToken, isTokenValid } from './services/tokenService';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();  // Utilise getToken() pour obtenir le token

     // Si un token est présent et toujours valide, récupère le profil
    if (token && isTokenValid()) {  
      dispatch(fetchProfile());
    } else {
      removeToken();  // Supprime le token si expiré ou non existant
    }
  }, [dispatch]);

  return (
    <div>
      <Router />
      <GlobalStyle />
    </div>
  );
};

export default App;