import styled from 'styled-components';

// Section pour les fonctionnalités
export const FeaturesSectionStyled = styled.section`
	display: flex;
	flex-direction: column;

	@media (min-width: 920px) {
		flex-direction: row;
	}
`;

// Conteneur pour chaque élément de fonctionnalité
export const FeatureItem = styled.div`
	flex: 1;
	padding: 2.5rem;
`;

// Icône pour chaque élément de fonctionnalité
export const FeatureIcon = styled.img`
	width: 100px;
	border: 10px solid #00bc77;
	border-radius: 50%;
	padding: 1rem;
`;

// Titre pour chaque élément de fonctionnalité
export const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;