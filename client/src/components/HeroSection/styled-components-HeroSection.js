import styled from 'styled-components';
import bankTreeImage from '../../img/bank-tree.webp';

// Arrière-plan d'image
export const Hero = styled.div`
	background-image: url(${bankTreeImage});
	background-position: 0 -50px;
	background-size: cover;
	background-repeat: no-repeat;
	height: 300px;
	position: relative;
`;

// Contenu de la section Hero
export const HeroContent = styled.section`
	position: relative;
	top: 2rem;
	width: 200px;
	background: white;
	padding: 2rem;
	text-align: left;
	margin: 0 auto;
`;

// Affichage des sous-titres
export const Subtitle = styled.p`
	font-weight: bold;
	font-size: 1rem;
	margin: 0;
`;

// Texte informatif
export const Text = styled.p`
	margin-bottom: 0;
	font-size: 0.9rem;
`;