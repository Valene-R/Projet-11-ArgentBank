import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
		
	body {
		margin: auto;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		max-width: 1440px;
	}
		
	main {
		flex: 1;
		max-width: 1440px;
		margin: 0;
	}
		
	.sr-only {
		border: 0 !important;
		clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
		-webkit-clip-path: inset(50%) !important;
		clip-path: inset(50%) !important; /* 2 */
		height: 1px !important;
		margin: -1px !important;
		overflow: hidden !important;
		padding: 0 !important;
		position: absolute !important;
		width: 1px !important;
		white-space: nowrap !important; /* 3 */
	}
`;