import styled from 'styled-components';

export const Background = styled.button`
	margin-left: 1rem;
	margin-right: 1rem;
	padding-left: 3rem;
	padding-right: 3rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	border-radius: 15px;
	border: none;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.text};
	font-style: normal;
	font-weight: bold;
	font-size: 32px;
	line-height: 42px;
	:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.background};
	}
	:disabled {
		cursor: not-allowed;
		opacity: 0.5;
		color: ${({ theme }) => theme.colors.text};
	}
	@media (max-width: 500px) {
		font-size: 24px;
		margin-top: 1rem;
		margin-bottom: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		width: 100%;
	}
`;
