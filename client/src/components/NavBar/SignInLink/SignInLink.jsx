import React from 'react';
import { NavLinkStyled } from './SignInLink.styled';

const SignInLink = ({ to, icon, children }) => {
	return (
	 <NavLinkStyled to={to}>
     <i className={icon}></i>
     {children}
   </NavLinkStyled>
	);
};

export default SignInLink;