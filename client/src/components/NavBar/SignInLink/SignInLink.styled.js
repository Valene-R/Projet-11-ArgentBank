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