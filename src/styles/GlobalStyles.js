// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import { colors, typography, breakpoints } from './variables';

const GlobalStyles = createGlobalStyle`
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${typography.fontFamilyPrimary};
    font-size: ${typography.fontSizeBase};
    line-height: ${typography.lineHeightBase};
    color: ${colors.text};
    background-color: ${colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden; /* Mencegah scroll horizontal */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${typography.fontFamilySecondary};
    color: ${colors.primary};
    margin-bottom: 0.8em;
    font-weight: ${typography.fontWeightBold};
  }

  h1 { font-size: 3.2em; }
  h2 { font-size: 2.5em; }
  h3 { font-size: 2em; }

  p {
    margin-bottom: 1em;
    font-weight: ${typography.fontWeightRegular};
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
    transition: color ${typography.transitionDuration} ease;
    &:hover {
      color: ${colors.accent};
    }
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  main {
    min-height: calc(100vh - 80px - 100px); /* Sesuaikan dengan tinggi navbar dan footer (sekitar 80px navbar, 100px footer) */
    display: flex;
    flex-direction: column;
  }

  /* Global mobile font size adjustments */
  @media (max-width: ${breakpoints.mobile}) {
    h1 { font-size: 2.5em; } /* Ukuran judul H1 lebih kecil di mobile */
    h2 { font-size: 2em; }   /* Ukuran judul H2 lebih kecil di mobile */
    h3 { font-size: 1.6em; } /* Ukuran judul H3 lebih kecil di mobile */
    p { font-size: 0.95em; } /* Sedikit kurangi ukuran paragraf */
  }
`;

export default GlobalStyles;
