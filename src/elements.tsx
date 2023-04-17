import { css } from '@emotion/react';
import styled from '@emotion/styled';

import {
    portfolioActive,
    portfolioActiveSecondary,
    systemFont,
    text,
} from './theme';

export const PageContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0px;
`;

export const buttonCSS = css`
    appearance: none;
    outline: transparent;
    border: unset;

    text-align: center;
    text-transform: capitalize;
    font-family: ${systemFont};
    font-size: 17px;
    font-weight: 700;

    border-radius: 7px;
    padding: 10px 20px;

    filter: brightness(1);
    transition: filter 250ms;
    cursor: pointer;

    :hover {
        filter: brightness(1.2);
    };

    :active {
        filter: brightness(0.8);
    }
`;

export const primaryButtonCSS = css`
    ${buttonCSS}
    color: ${text};
    background-color: ${portfolioActive};
`;

export const secondaryButtonCSS = css`
    ${buttonCSS}
    color: ${text};
    background-color: ${portfolioActiveSecondary};
`;

export const PrimaryCTA = styled.button`
    ${primaryButtonCSS}
`;

export const SecondaryCTA = styled.button`
    ${secondaryButtonCSS}
`;
