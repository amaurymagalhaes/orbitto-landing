import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export const BackBox = styled.div`
	background-color: ${({ theme }) => theme.colors.text};
	width: 85%;
	height: 85%;
	padding: 1rem;
`;

export const HeaderContainer = styled.div`
	border-bottom: ${({ theme }) => `1px solid ${theme.colors.primary}`};
`;

export const Header = styled.h1`
	color: ${({ theme }) => theme.colors.primary};
`;
