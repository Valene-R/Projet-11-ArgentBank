import styled from 'styled-components';

// Conteneur principal pour le champ
export const Root = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-bottom: 1rem;  
`;

// Étiquette pour le champ
export const Label = styled.label`
	font-weight: bold;
`;

// Style de l'input
export const Input = styled.input`
	padding: 5px;
	font-size: 1.2rem;
`;