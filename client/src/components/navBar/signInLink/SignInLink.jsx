import React from 'react';
import { NavLinkStyled, ActionButton } from './signInLink.styled';

const SignInLink = ({ to, icon, children, onClick }) => {
  if (to) {
    return (
      <NavLinkStyled to={to}>
        <i className={icon}></i>
        {children}
      </NavLinkStyled>
    );
  } else if (onClick) {
    return (
      <ActionButton onClick={onClick}>
        <i className={icon}></i>
        {children}
      </ActionButton>
    );
  }
  return null; // Gére le cas où ni "to" ni "onClick" ne sont fournis
};

export default SignInLink;