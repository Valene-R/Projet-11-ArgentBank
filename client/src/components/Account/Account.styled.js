import styled from 'styled-components';

// Section principale
export const Root = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

// Conteneur pour le contenu du compte
export const AccountContent = styled.div`
  width: 100%;
  flex: 1;

  &.cta {
    flex: 0;
  }

  @media (min-width: 720px) {
    &.cta {
      flex: 0;
    }
  }
`;

// Titre du compte
export const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

// Montant dans le compte
export const Amount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

// Description ou détails du compte
export const Description = styled.p`
  margin: 0;
`;

// Bouton pour initier une transaction
export const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;

  @media (min-width: 720px) {
    width: 200px;
  }
`;