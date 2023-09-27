import React from 'react';
import { ROUTES } from '../../Router/routes';
import { Nav, NavLinkLogo, NavLinkStyled, Logo, DivSignIn } from './styled-components-NavBar';
import LogoArgentBank from '../../img/argentBankLogo.png';

const NavBar = () => {
  return (
    <Nav>
      <NavLinkLogo to={ROUTES.HOME}>
        <Logo src={LogoArgentBank} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
      </NavLinkLogo>
			<DivSignIn>
				<NavLinkStyled to={ROUTES.SIGNIN}>
        	<i className="fa fa-user-circle"></i>
        	Sign In
      	</NavLinkStyled> 
			</DivSignIn> 
    </Nav>
  );
};

export default NavBar;