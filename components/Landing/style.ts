import styled from 'styled-components';
import Image from 'next/image';

export const Background = styled.div`
	width: 100vw;
	height: 100vh;
	background: #0b0c20;
	position: absolute;
	z-index: 0;
`;

export const InteractContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 500px) {
		flex-direction: column;
		position: relative;
	}
`;

export const LogoImage = styled.img`
	height: 20%;
	width: 80%;
	margin-bottom: 5rem;
	object-fit: contain;
`;

export const NightSkyImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	position: absolute;
	z-index: -14;
`;

export const SocialMediasContainer = styled.div`
	display: flex;
	flex-direction: row;
	position: absolute;
	bottom: 0;
	margin-bottom: 1rem;
`;

export const SocialMediaButton = styled.a`
	color: #ffffff;
	display: flex;
	margin-left: 1rem;
	margin-right: 1rem;
	cursor: pointer;
	background: none;
	border: none;
	:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`;
