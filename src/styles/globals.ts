import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@font-face {
  font-family: "fathur";
  src: url("/fonts/fathur.ttf") format("truetype");
}


    :root {
        --blue-light: #1B273B;
        --blue-base: #00001E;
        --pink-base: #ED017B;
        --purple-base: #8100B2;
        --yellow-base: #FFD237;
        --cyan-base: #00F5FE;
        --white-base: #ffffff;
        --font-logo: 'Fathur'
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-position: inside;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        font-size: 2rem;
        font-family: 'Rubik';
        background-image: url("/svg/blob.svg");
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
    h1 {
        font-size: 3.6rem;
    }
    
    h2 {
        color:var(--pink-base);
        font-size: 3.6rem;
        padding-bottom: 2rem;
    }
    h3 {
      color:var(--pink-base)
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

    article {
      background-color: var(--blue-light);
      width: 100%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 1000px) {
        height: initial;
      }

      h4 {
        padding-top: 1rem;
      }

      a {
        color: var(--pink-base);
        font-weight: 700;

        &:hover {
          color: var(--cyan-base);
        }
      }

      span::after {
        content: ", ";
      }
      span:last-child::after {
        content: ".";
      }
    }
    ol li {
      padding-bottom: 1rem;
    }

    ol li::marker {
      font-weight: 700;
      color: var(--pink-base)
    }
`;

export const Grid = styled.section`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: auto;
  }
`;

export const flexCenter = 'display:flex;align-items:center;';

export const flexCenterCenter =
  'display:flex;align-items:center;justify-content:center;';
