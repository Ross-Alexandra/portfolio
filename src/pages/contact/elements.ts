import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ContactBackdrop as ContactBackdropImage } from '../../assets';
import { primaryButtonCSS } from '../../elements';
import {
    defaultFont,
    portfolioActive,
    portfolioBackground,
    systemFont,
} from '../../theme';

export const ContactMeWrapper = styled.div`
    display: grid;
    place-items: center;

    position: absolute;
    inset: 0;

    background-color: ${portfolioActive};
`;

export const ContactBackdrop = styled.div`
    position: absolute;
    inset: 0;

    background-image: 
        linear-gradient(90deg, ${portfolioActive}80, ${portfolioActive}80),
        url('${ContactBackdropImage}');
    background-size: 100%;

    filter: blur(2px);
`;

export const ContactMeContent = styled.div`
    width: 95vw;
    max-width: 750px;
    height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${portfolioBackground};
    border-radius: 10px;
    box-shadow: 8px 7px 32px -1px #000000;

    z-index: 1;
`;

export const ContactTitle = styled.h2`
    text-align: center;
    margin-bottom: 15px;
`;

export const EmailForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 60%;
`;

export const textInputCSS = (error: string) => css`
    background-color: rgba(0, 0, 0, .05);
    border: 1px solid ${error ? 'red' : portfolioActive};
    margin-bottom: ${error ? '0px' : '15px'};

    appearance: none;

    width: 100%;
    height: 35px;
    border-radius: 5px;
    padding-left: 10px;

    outline: none;

    font-family: ${defaultFont};

    ::placeholder {
        color: black;
        opacity: 0.5;
        font-family: ${systemFont};
    }

    :focus {
        border-color: #5AFFFF;
    }
`;

export const EmailFrom = styled.input<{error: string}>`
    ${({ error }) => textInputCSS(error)}
`;

export const EmailSubject = styled.input<{error: string}>`
    ${({ error }) => textInputCSS(error)}
`;

export const EmailText = styled.textarea<{error: string}>`
    ${({ error }) => textInputCSS(error)}

    height: 150px;
    padding-top: 10px;
    resize: none;
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 10px;

    margin-bottom: 15px;
`;

export const SubmitButton = styled.input`
    ${primaryButtonCSS}

    width: 150px;
    height: 30px;
    padding: unset;

    outline: unset;
    border: none;
`;
