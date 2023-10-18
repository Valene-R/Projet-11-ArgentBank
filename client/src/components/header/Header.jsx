import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../reducers/authActions'; 
import { Root, WelcomeTitle, EditButton, InvisibleHeader } from './header.styled';

const Header = () => {
  const dispatch = useDispatch();
  

  // Utilise le sélecteur pour obtenir les données de l'utilisateur
  const user = useSelector(state => state.auth.profile);
  console.log ('user', user)

  useEffect(() => {
    // Dispatche le thunk pour récupérer les données du profil
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <Root>
      <WelcomeTitle>Welcome back<br />{user?.firstName} {user?.lastName}!</WelcomeTitle>
      <EditButton>Edit Name</EditButton>
      <InvisibleHeader>Accounts</InvisibleHeader>
    </Root>
  );
};

export default Header;
