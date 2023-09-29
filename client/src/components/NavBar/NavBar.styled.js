import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Conteneur principal de la barre de navigation
export const Root = styled.nav`
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

// Conteneur de "Sign In"
export const DivSignIn = styled.div`
	display: block;
`;