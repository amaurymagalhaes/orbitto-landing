import { NextPage } from 'next';
import Particles from 'react-tsparticles';
import { ISourceOptions } from 'tsparticles';
import particlesOptions from '../../utils/particles/stars.json';
import { Background, ColorBG, ParticleContainer } from './styles';

const StarsBackground: NextPage = () => {
	return (
		<Background>
			<ColorBG />
			<ParticleContainer>
				<Particles options={particlesOptions as ISourceOptions} />
			</ParticleContainer>
		</Background>
	);
};

export default StarsBackground;
