import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --blue-light: #1B273B;
        --blue-base: #010D21;
        --pink-base: #ED017B;
        --purple-base: #8100B2;
        --yellow-base: #FFD237;
        --cyan-base: #00F5FE;
        --white-base: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        font-size: 2rem;
        font-family: 'Anaheim';
        background-color: var(--blue-base);
        color: var(--white-base);
        font-weight: 500;
    }

    a, a:visited, a:link {
        font-size: 2rem;
        color: inherit
    }

    p {
        margin-bottom: 2rem;
    }

    h2 {
        color:var(--pink-base);
        font-size: 3.6rem;
        padding-bottom: 2rem;
    }
    .content {
        display: flex;
        justify-content: space-between;
    }
    
    .cyan {
        font-weight: bold;
        color: var(--cyan-base);
    }

    .yellow {
        font-weight: bold;
        color: var(--yellow-base)
    }

    p:last-child {
        margin-bottom: 0;
    }
`;

export const flexCenter = "display:flex;align-items:center;";

export const flexCenterCenter =
  "display:flex;align-items:center;justify-content:center;";
