import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* COLORS */

:root {// Grey 
--color-grey-0: #fff;
  --color-grey-50: #e6e6e6;
  --color-grey-100: #dedede;
  --color-grey-200: #ababab;
  --color-grey-300: #8a8a8a;
  --color-grey-400: #6e6e6e;
  --color-grey-500: #5c5c5c;
  --color-grey-600: #474747;
  --color-grey-700: #343434;
  --color-grey-800: #1a1a1a;
  --color-grey-900: #121212;

  // Green
--color-green-50: #f0fdf4;
--color-green-100: #dcfce7;
--color-green-500: #22c55e;
--color-green-600: #16a34a;
--color-green-900: #14532d;
--color-green-950: #052e16;

  // Red
  --color-red-50: #fef2f2;
--color-red-100: #fee2e2;
--color-red-500: #ef4444;
--color-red-600: #dc2626;
--color-red-900: #7f1d1d;
--color-red-950: #450a0a;

* {
  box-sizing: border-box;
  /* margin: 0;
  padding: 0; */
  font-family: "Open Sans", sans-serif;
}
html {
  font-size: 62.5%;
  overflow: hidden;
}

body {
    position: relative;
    height: 100vh;
}
}`;

export default GlobalStyles;
