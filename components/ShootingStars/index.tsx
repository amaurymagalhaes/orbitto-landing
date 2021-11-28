import type { NextPage } from 'next';
import { SkyContainer } from './style';

const ShootingStars: NextPage = () => {
	return (
		<SkyContainer>
			<div className="star"></div>
			<div className="star"></div>
			<div className="star"></div>
			<div className="star"></div>
			<div className="star"></div>
		</SkyContainer>
	);
};

export default ShootingStars;
