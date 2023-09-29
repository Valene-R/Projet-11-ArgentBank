import React from 'react';
import { ROUTES } from '../../Router/routes';
import { Root, DivSignIn } from './NavBar.styled';
import Logo from './Logo/Logo';
import SignInLink from './SignInLink/SignInLink';

const NavBar = () => {
  return (
    <Root>
      <Logo to={ROUTES.HOME} />
			<DivSignIn>
				<SignInLink to={ROUTES.SIGNIN} icon="fa fa-user-circle">Sign In</SignInLink>
			</DivSignIn> 
    </Root>
  );
};

export default NavBar;