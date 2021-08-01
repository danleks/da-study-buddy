import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }

    button, a {
        font-family: 'Montserrat', sans-serif;
    }
`;
