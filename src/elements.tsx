import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { SVGProps } from "react";
import { portfolioBackground100, portfolioActive, portfolioActiveSecondary, systemFont } from "./theme";

interface ParalaxProps extends React.HTMLProps<HTMLDivElement> {
    paralaxHeight: number;
    viewportHeight: number;
}

export const ParalaxDiv = styled.div<ParalaxProps>`
    position: fixed;
    left: 0px;
    right: 0px;
    background-color: ${portfolioBackground100};

    ${({paralaxHeight, viewportHeight}: ParalaxProps) => `
        top: ${viewportHeight - paralaxHeight}px;
        bottom: 0px;
        overflow: ${viewportHeight === paralaxHeight ? 'scroll' : 'hidden'};
    `}

    transition: top 200ms;
`;

export const PageContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0px;
`;

const buttonCSS = css`
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

export const PrimaryCTA = styled.div`
    ${buttonCSS}
    color: black;
    background-color: ${portfolioActive};
`;

export const SecondaryCTA = styled.div`
    ${buttonCSS}
    color: black;
    background-color: ${portfolioActiveSecondary};
`;

export interface ILogo extends SVGProps<SVGSVGElement> {
    primaryColor?: string;
    width: number;
    height: number;
} 
export function Logo({primaryColor=portfolioActive, width, height, ...props}: ILogo) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 74.182 114.914">
            <path fill={primaryColor} fillOpacity=".996" d="M0-.074h74.206V114.98H0z" />
            <g transform="translate(-10 -49.99)" fillOpacity=".996">
                <ellipse cx="17.501" cy="57.451" rx="4.262" ry="4.233" stroke="#000" strokeWidth="6.458" />
                <ellipse cx="17.455" cy="-57.709" rx="1.241" ry="1.233" transform="scale(1 -1)" fill={primaryColor} stroke={primaryColor}
                    strokeWidth="4.255" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 24.191 -36.93)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke="#000" strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={primaryColor} stroke={primaryColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 58.744 -28.253)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke="#000" strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={primaryColor} stroke={primaryColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 58.744 -3.253)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke="#000" strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={primaryColor} stroke={primaryColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 24.191 13.07)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke="#000" strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={primaryColor} stroke={primaryColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 .012 13.07)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke="#000" strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={primaryColor} stroke={primaryColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 .012 63.07)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke="#000" strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={primaryColor} stroke={primaryColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 59.191 63.07)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke="#000" strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={primaryColor} stroke={primaryColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <path
                d="M37.096 6.367h27.781L66.2 7.69v2.646M66.2 21.448v15.875M66.2 47.377v5.821l-3.969 3.44h-24.87M34.45 62.459l29.104 41.01M7.463 12.982v38.364M7.463 63.517v38.63"
                fill="none" stroke="#000" strokeWidth="6.767" />
        </svg>
    );
}