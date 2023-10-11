import React from 'react';
import { ROUTES } from '../../Router/routes';
import { Root, DivSignIn } from './NavBar.styled';
import Logo from './Logo/Logo';
import SignInLink from './SignInLink/SignInLink';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../reducers/authSlice'; 
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const profile = useSelector((state) => state.auth.profile); // Obtient les informations du profil à partir du store redux
  const dispatch = useDispatch(); // Dispatch pour l'utilisation des actions redux
  const navigate = useNavigate(); // Hook pour la navigation entre les pages

  // Gère la déconnexion de l'utilisateur
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate(ROUTES.HOME);
  };

  return (
    <Root>
      <Logo to={ROUTES.HOME} />
			<DivSignIn>
        {profile && profile.firstName ? (
        // Si l'utilisateur est connecté, affiche son prénom et le bouton de déconnexion
        <>
          <SignInLink to={ROUTES.USER} icon="fa fa-user-circle">
            {profile.firstName}
          </SignInLink>
          <SignInLink onClick={handleLogout} icon="fas fa-sign-out-alt">
            Sign Out
          </SignInLink>
        </>
      ) : (
        // Si l'utilisateur n'est pas connecté, affiche le bouton de connexion
        <SignInLink to={ROUTES.SIGNIN} icon="fa fa-user-circle">
          Sign In
        </SignInLink>
      )}
			</DivSignIn> 
    </Root>
  );
};

export default NavBar; 