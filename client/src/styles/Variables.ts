import { css } from 'styled-components';

const Variables = css`
  :root {
    // Font
    --font-main: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;

    // Font size
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;

    // Colors
    --white: #fff;
    --black: #000;
    --grey: #e5e3e3;
    --greyDark: #ccc;
    --red: #c71f05;
    --navyBlue: #033349;
    --green: #57cd59;

    // Other
    --transition: all 0.25s ease-in-out;
  }
`;

export default Variables;