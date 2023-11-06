import styled from 'styled-components';


// Conteneur principal de la barre de navigation
export const Root = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  max-width: 1440px;
`;

// Conteneur de "Sign In"
export const DivSignIn = styled.div`
	display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-weight: bold;
  align-items: center;
  
  @media all and (max-width: 403px) {
    position: relative;
    top: -10px;
  }
`;

// "Out"
export const Span = styled.span`
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  @media all and (max-width: 403px) {
    position: absolute;
    right: 58px;
    top: 20px;
  }
`;

// Conteneur de l'icône et "Sign In"
export const Styled = styled.div`
	display: flex;
  flex-direction: row;
  align-items: center;
`;

// "Sign In" 
export const StyledMobil = styled.div`
  @media all and (max-width: 403px) {
    padding-top: 20px;
    width: 100px;
  }
`;