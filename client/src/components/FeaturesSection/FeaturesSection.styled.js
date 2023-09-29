import styled from 'styled-components';

// Section pour les fonctionnalités
export const Root = styled.section`
	display: flex;
	flex-direction: column;

	@media (min-width: 920px) {
		flex-direction: row;
	}
`;

