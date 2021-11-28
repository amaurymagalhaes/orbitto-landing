import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
// import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Orbitto - The spacest crypto game ever</title>
				<meta name="description" content="The spacest crypto game ever." />
				<meta property="og:url" content={'https://orbitto.space'} key="ogurl" />
				<meta property="og:image" content={'/images/meta.png'} key="ogimage" />
				<meta property="og:site_name" content={'Orbitto'} key="ogsitename" />
				<meta property="og:title" content={'Orbitto'} key="ogtitle" />
				<meta
					property="og:description"
					content={'The spacest crypto game ever.'}
					key="ogdesc"
				/>
				<link rel="icon" href="/favicon.ico" />'
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://orbitto.space/" />
				<meta property="twitter:title" content="Orbitto" />
				<meta
					property="twitter:description"
					content="The spacest crypto game ever."
				/>
				<meta property="twitter:image" content={'/images/meta.png'} />
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
