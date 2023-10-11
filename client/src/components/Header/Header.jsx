import React from 'react';
import { Root, WelcomeTitle, EditButton, InvisibleHeader } from './Header.styled';

const Header = ({ userName }) => {
  
  return (
    <Root>
      <WelcomeTitle>Welcome back<br />{userName}!</WelcomeTitle>
      <EditButton>Edit Name</EditButton>
      <InvisibleHeader>Accounts</InvisibleHeader>
    </Root>
  );
};

export default Header;
