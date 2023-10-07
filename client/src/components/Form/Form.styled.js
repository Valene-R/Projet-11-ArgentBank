import styled from 'styled-components';

// Conteneur principal du formulaire
export const Root = styled.main `
	flex: 1;
	display: block;
	background-color: #12002b;
	height: 692px;
	margin-top: -48px;
`;

// Contenu du formulaire de connexion
export const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
  position: relative;
  top: 48px;
`;

// Icône utilisateur
export const UserIcon = styled.i`
  font-size: 1rem;
`;

// Formulaire
export const StyledForm = styled.form`
	display: block;
`;

// Bouton de soumission du formulaire
export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
	border: none;
	cursor: pointer;
	text-decoration: underline;
`;

// Loading de chargement
export const Loading = styled.div`
  padding: 10px;
  color: #fff;
  background-color: #3498db;
  border-radius: 5px;
  text-align: center;
`;

// Message d'erreur
export const Error = styled.div`
  padding: 10px;
  color: #fff;
  background-color: #e74c3c;
  border-radius: 5px;
  text-align: center;
  margin-top: 10px;
`;