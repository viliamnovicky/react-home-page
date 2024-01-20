import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* COLORS */

:root {// Grey 
--color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

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

body {
    position: relative;
}
}`;

export default GlobalStyles;
