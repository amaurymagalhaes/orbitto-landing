import Button from 'components/Button';
import ShootingStars from 'components/ShootingStars';
import StarsBackground from 'components/StarsBackground';
import StarsLayout from 'layouts/starslayout';
import type { NextPage } from 'next';
import Link from 'next/link';
import { FaDiscord, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import {
	Background,
	ButtonsContainer,
	InteractContainer,
	LogoImage,
	NightSkyImage,
	SocialMediaButton,
	SocialMediasContainer,
} from './style';

const Landing: NextPage = () => {
	const iconSize = 40;

	return (
		<StarsLayout>
			<InteractContainer>
				<LogoImage src="/images/logo.png" />
				<ButtonsContainer>
					<Button disabled>Play</Button>
					<Link href="/presale">
						<Button>Pre-sale</Button>
					</Link>
					<Button>Whitepaper</Button>
				</ButtonsContainer>
				<SocialMediasContainer>
					<SocialMediaButton
						href="https://discord.gg/gGb7cddyp4"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaDiscord size={iconSize} />
					</SocialMediaButton>
					<SocialMediaButton
						href="https://twitter.com/theorbitto"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter size={iconSize} />
					</SocialMediaButton>
					<SocialMediaButton
						href="https://github.com/Orbitto"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub size={iconSize} />
					</SocialMediaButton>
				</SocialMediasContainer>
			</InteractContainer>
		</StarsLayout>
	);
};

export default Landing;
