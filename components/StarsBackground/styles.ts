import styled from 'styled-components';

export const Background = styled.div`
	position: absolute;
	z-index: -10;
	opacity: 100%;
	display: flex;
	height: 100vh;
	width: 100vw;
`;

export const ColorBG = styled.div`
	background-image: ${({ theme }) =>
		`linear-gradient(to left, black, ${theme.colors.primary})`};
	width: 100%;
	height: 100%;
	opacity: 35%;
	position: absolute;
	z-index: -11;
`;

export const ParticleContainer = styled.div`
	position: absolute;
	z-index: -13;
`;
