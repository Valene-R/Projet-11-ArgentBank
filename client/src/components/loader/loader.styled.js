import styled, { keyframes } from 'styled-components';


// Animation keyframes pour le spinner
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Loading stylisé
export const Loading = styled.div`
  border: 5px solid #f3f3f3; 
  border-top: 5px solid #00bc77; 
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear; 
  opacity: 1; 
  transition: opacity 0.5s ease-out;
`;

// Conteneur
export const Root = styled.div`
  display: flex;
  justify-content: center; // Centre horizontalement
  align-items: center; // Centre verticalement
  height: 100vh; // Prend toute la hauteur de l'écran 
`;
