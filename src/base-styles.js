// base-styles.js
import {injectGlobal} from 'styled-components';
import reset from 'styled-reset';

const baseStyles = () => injectGlobal`
  ${reset}
    html {
        font-size: 62.5%;
    }
    body {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 1.6rem;
    }
`;

export default baseStyles;
