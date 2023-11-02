import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// lien du logo
export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
`;

// Image du Logo
export const LogoImg = styled.img`
  max-width: 100%;
  width: 200px;
`;