import ProgressBar from 'components/ProgressBar';
import StarsLayout from 'layouts/starslayout';
import type { NextPage } from 'next';
import { useState } from 'react';
import { BackBox, Container, Header, HeaderContainer } from './style';

const Presale: NextPage = () => {
	const [tokensRemaining, setTokensRemaining] = useState(32);
	const [tokensTotal, setTokensTotal] = useState(100);

	return (
		<StarsLayout>
			<Container>
				<BackBox>
					<HeaderContainer>
						<Header>STARS Pre-sale</Header>
					</HeaderContainer>
					<ProgressBar remaining={tokensRemaining} total={tokensTotal} />
				</BackBox>
			</Container>
		</StarsLayout>
	);
};

export default Presale;
