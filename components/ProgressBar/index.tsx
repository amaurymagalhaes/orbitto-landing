import StarsLayout from 'layouts/StarsLayout';
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
	isReverse?: boolean;
}

const ProgressBar: NextPage<ProgressBarProps> = props => {
	const { remaining, total, isReverse } = props;
	const percentage = isReverse
		? (1 - remaining / total) * 100
		: (remaining / total) * 100;

	return (
		<Box>
			<Container>
				<BackgroundBox />
				<ProgressBox percent={percentage} />
			</Container>
			<ProgressText>{percentage}%</ProgressText>
		</Box>
	);
};

export default ProgressBar;
