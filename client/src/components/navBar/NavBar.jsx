import React from 'react';
import { ROUTES } from '../../router/routes';
import { Root, DivSignIn, Span, Styled, StyledMobil } from './navBar.styled';
import Logo from './logo/Logo';
import SignInLink from './signInLink/SignInLink';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../reducers/authActions'; 
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
      {profile ? (
        <>
          <SignInLink to={ROUTES.USER} icon="fa fa-user-circle">
            {profile.userName || profile.firstName}
          </SignInLink>
          <Styled>
            <SignInLink onClick={handleLogout} icon="fas fa-sign-out-alt">
            {/* '&nbsp;' Caractère d'espacement */}
              Sign&nbsp;<Span>Out</Span> 
            </SignInLink>
          </Styled>
        </>
      ) : (
        <>
          <StyledMobil>
            <SignInLink to={ROUTES.SIGNIN} icon="fa fa-user-circle">
              Sign In
            </SignInLink>
          </StyledMobil>
        </>
      )}
    </DivSignIn> 
    </Root>
  );
};

export default NavBar; 