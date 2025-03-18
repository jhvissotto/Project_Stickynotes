import { createGlobalStyle } from 'styled-components'


export const Custom = createGlobalStyle`
    :root {
        --primary:                      #FFC709;
        --primary-light:                #FFE9A1;
        --primary-gradient-ini:         #FFCE09;
        --primary-gradient-end:         #F0A500;
        --primary-gradient-ini-light:   #FFD83D;
        --primary-gradient-end-light:   #F0AD1D;
    }

    #__next {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .safe-area-view { 
        width: 960px;
    }

    .max-safe-area-view { 
        max-width: 960px;
    }

    p, h1, h2, h3, h4, h5, h6 {
        cursor: default ;
    }

    li {
        list-style-type: none;
    }

    textarea:focus, 
    input:focus {
        outline: none;
    }

    button {
        border: none;
        outline: none;
    }
`