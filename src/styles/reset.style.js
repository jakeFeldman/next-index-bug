// PACKAGES
import { css } from '@emotion/core';

export default css`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0 auto;
        padding: 0;
        font-size: 1.4rem;
    }

    #nprogress {
        .bar {
            background: #000;
        }
        .spinner-icon {
            display: none;
        }
        .peg {
            box-shadow: 0 0 10px #000, 0 0 5px #000;
        }
    }
`;
