import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: white;
        color: black;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
			font-family: 'Roboto';
        font-weight: 400;
    }

    h1, h2, h3, h4, h5{
        font-family: 'Orbitron';

    }

`;
