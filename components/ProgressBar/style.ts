import styled from 'styled-components';

interface ProgressProps {
	readonly percent: number;
	readonly progressColor?: string;
}

interface ProgressTextProps {
	readonly progressColor?: string;
}

interface BackgroundBoxProps {
	readonly backgroundColor?: string;
}

interface ContainerProps {
	readonly barHeight?: number;
}

export const Box = styled.div`
	height: max-content;
	width: 100%;
	margin: 10px 0px;
`;

export const Container = styled.div<ContainerProps>`
	height: ${({ barHeight }) => (barHeight ? barHeight : 10)}px;
	width: 100%;
	position: relative;

	box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
`;

export const BaseBox = styled.div`
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	border-radius: 3px;
	transition: width 10s ease-in-out;
`;

export const BackgroundBox = styled(BaseBox)<BackgroundBoxProps>`
	background-color: ${({ backgroundColor, theme }) =>
		backgroundColor ? backgroundColor : theme.colors.primary};
	width: 100%;
`;

export const ProgressBox = styled(BaseBox)<ProgressProps>`
	background-color: ${({ progressColor, theme }) =>
		progressColor ? progressColor : theme.colors.background};
	width: ${({ percent }) => percent}%;
`;

export const ProgressText = styled.h3<ProgressTextProps>`
	color: ${({ progressColor, theme }) =>
		progressColor ? progressColor : theme.colors.background};
	margin-bottom: 5px;
	font-size: 18px;
	text-align: end;
`;
