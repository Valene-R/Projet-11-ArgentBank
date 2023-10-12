import React from 'react';
import { LogoLink, LogoImg } from './logo.styled';
import LogoArgentBank from '../../../img/argentBankLogo.png';

const Logo = ({ to }) => {
  return (
    <LogoLink to={to}>
      <LogoImg src={LogoArgentBank} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>  
    </LogoLink>
  );
};

export default Logo;