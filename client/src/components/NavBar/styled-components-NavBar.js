import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Conteneur principal de la barre de navigation
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

// Liens de navigation
export const NavLinkStyled = styled(NavLink)`
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 8px;
  
  &.active {
    color: #42b983;
  }
  
  &:hover {
    text-decoration: underline;
  }

  i.fa {
    margin-right: 4px;
  }
`;

// lien du logo
export const NavLinkLogo = styled(NavLinkStyled)`
  display: flex;
  align-items: center;
`;

// Image du Logo
export const Logo = styled.img`
  max-width: 100%;
  width: 200px;
`;

// Conteneur de "Sign In"
export const DivSignIn = styled.div`
	display: block;
`;