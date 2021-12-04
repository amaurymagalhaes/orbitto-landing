import Button from 'components/Button';
import ShootingStars from 'components/ShootingStars';
import StarsBackground from 'components/StarsBackground';
import type { NextPage } from 'next';
import { Background, NightSkyImage } from './style';

const StarsLayout: NextPage = ({ children }) => {
	return (
		<Background>
			<ShootingStars />
			<NightSkyImage src="/images/night-sky.png" />
			<StarsBackground />
			{children}
		</Background>
	);
};

export default StarsLayout;
