import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Liens de navigation
export const NavLinkStyled = styled(NavLink)`
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 8px;
  
  &:hover {
    text-decoration: underline;
  }

  i.fa {
    margin-right: 4px;
  }
`;

// Bouton d'action
export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #2c3e50;
  margin-right: 8px;
  font-size: 16px;
  display: flex;
  flex-basis: min-content;
  
  &:hover {
    text-decoration: underline;
  }

  i.fa {
    margin-right: 4px;
  }

  @media (min-width: 404px) {
		flex-basis: unset;
	}
`;