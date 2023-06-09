import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    :root{
        --primary-color: #222260;
        --primary-color2: 'color: rgba(34, 34, 34' 0.6;
        --primary-color3: 'color: rgba(34, 34, 34' 0.4;
        --color-green: #42AD00;
        --color-accent: #F56692;
        --color-grey: #eee;
        --color-delete: #FF0000;
    }
    body{
        font-family: 'Nunito Sans', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: var(--primary-color2);
    }
`;