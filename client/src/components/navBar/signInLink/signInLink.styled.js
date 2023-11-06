import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Liens de navigation
export const NavLinkStyled = styled(NavLink)`
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  display: flex;
  
  &:hover {
    text-decoration: underline;
  }

  i.fa {
    margin-right: 4px;
    padding-top: 4px;
  }
`;

// Bouton d'action
export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #2c3e50;
  font-size: 16px;
  display: flex;
  flex-basis: min-content;
  padding-left: 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Styled = styled.div`
  display: flex;
  padding-left: 10px;
  gap: 5px;
`;