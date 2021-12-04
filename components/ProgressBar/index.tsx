import StarsLayout from 'layouts/starslayout';
import type { NextPage } from 'next';
import { useState } from 'react';
import {
	BackgroundBox,
	Box,
	Container,
	ProgressBox,
	ProgressText,
} from './style';

interface ProgressBarProps {
	remaining: number;
	total: number;
	backgroundColor?: string;
	progressColor?: string;
	barHeight?: string;
}

const ProgressBar: NextPage<ProgressBarProps> = props => {
	const { remaining, total } = props;
	const percentage = (remaining / total) * 100;

	return (
		<Box>
			<ProgressText>{percentage}%</ProgressText>
			<Container>
				<BackgroundBox />
				<ProgressBox percent={percentage} />
			</Container>
		</Box>
	);
};

export default ProgressBar;
