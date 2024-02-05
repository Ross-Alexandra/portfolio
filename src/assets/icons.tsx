import React from 'react';

import { portfolioActive, portfolioBackground, text } from '../theme';

export interface ILogo extends React.SVGProps<SVGSVGElement> {
    primaryColor?: string;
    backgroundColor?: string;
    width?: number;
    height?: number;
}
export function PortfolioLogo({
    primaryColor = text,
    backgroundColor = portfolioBackground,
    width,
    height,
    ...props
}: ILogo) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 74.182 114.914">
            <g transform="translate(-10 -49.99)" fillOpacity=".996">
                <ellipse cx="17.501" cy="57.451" rx="4.262" ry="4.233" stroke={primaryColor} strokeWidth="6.458" />
                <ellipse cx="17.455" cy="-57.709" rx="1.241" ry="1.233" transform="scale(1 -1)" fill={backgroundColor} stroke={backgroundColor}
                    strokeWidth="4.255" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 24.191 -36.93)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke={primaryColor} strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={backgroundColor} stroke={backgroundColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 58.744 -28.253)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke={primaryColor} strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={backgroundColor} stroke={backgroundColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 58.744 -3.253)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke={primaryColor} strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={backgroundColor} stroke={backgroundColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 24.191 13.07)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke={primaryColor} strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={backgroundColor} stroke={backgroundColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 .012 13.07)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke={primaryColor} strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={backgroundColor} stroke={backgroundColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 .012 63.07)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke={primaryColor} strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={backgroundColor} stroke={backgroundColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <g transform="matrix(.75013 0 0 .74515 59.191 63.07)" fillOpacity=".996">
                <circle cx="9.984" cy="59.575" stroke={primaryColor} strokeWidth="8.637" r="5.681" />
                <circle cx="9.922" cy="-59.921" transform="scale(1 -1)" fill={backgroundColor} stroke={backgroundColor} strokeWidth="5.691"
                    r="1.655" />
            </g>
            <path
                d="M37.096 6.367h27.781L66.2 7.69v2.646M66.2 21.448v15.875M66.2 47.377v5.821l-3.969 3.44h-24.87M34.45 62.459l29.104 41.01M7.463 12.982v38.364M7.463 63.517v38.63"
                fill="none" stroke={primaryColor} strokeWidth="6.767" />
        </svg>
    );
}

export function GithubLogo({ fill = portfolioActive, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" {...props} viewBox="0 0 24 24" fill={fill}>
            <path
                d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
            />
        </svg>
    );
}

export function LinkedInLogo({ fill = portfolioActive, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" {...props} viewBox="0 0 24 23">
            <path
                d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"
                fill={fill}
            />
        </svg>
    );
}

export function ResponsibilityIcon({ fill = text, ...props }) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd">
            <path
                d="M7 16.488l1.526-.723c1.792-.81 2.851-.344 4.349.232 1.716.661 2.365.883 3.077 1.164 1.278.506.688 2.177-.592 1.838-.778-.206-2.812-.795-3.38-.931-.64-.154-.93.602-.323.818 1.106.393 2.663.79 3.494 1.007.831.218 1.295-.145 1.881-.611.906-.72 2.968-2.909 2.968-2.909.842-.799 1.991-.135 1.991.72 0 .23-.083.474-.276.707-2.328 2.793-3.06 3.642-4.568 5.226-.623.655-1.342.974-2.204.974-.442 0-.922-.084-1.443-.25-1.825-.581-4.172-1.313-6.5-1.6v-5.662zm-1 6.538h-4v-8h4v8zm1-7.869v-1.714c-.006-1.557.062-2.447 1.854-2.861 1.963-.453 4.315-.859 3.384-2.577-2.761-5.092-.787-7.979 2.177-7.979 2.907 0 4.93 2.78 2.177 7.979-.904 1.708 1.378 2.114 3.384 2.577 1.799.415 1.859 1.311 1.853 2.879 0 .13-.011 1.171 0 1.665-.483-.309-1.442-.552-2.187.106-.535.472-.568.504-1.783 1.629-1.75-.831-4.456-1.883-6.214-2.478-.896-.304-2.04-.308-2.962.075l-1.683.699z"
                fill={fill}
            />
        </svg>
    );
}

export function AchievementsIcon({ fill = text, ...props }) {
    return (
        <svg
            {...props}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                fillRule="nonzero"
                fill={fill}
            />
        </svg>
    );
}

export function LessonsIcon({ fill = text, ...props }) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z"
                fill={fill}
            />
        </svg>
    );
}

export function ExternalLink({ fill = text, ...props }) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.155 37.155">
            <g stroke={fill}>
                <path d="M13.21 4.101H3.95v29.104h29.104v-9.26M29.085 8.07L14.533 22.622z" fill="none" strokeWidth="6" />
                <path d="M19.825.132L37.023 17.33V.132z" fill={fill} strokeWidth=".265" />
            </g>
        </svg>
    );
}

export function TechnologyIcon({ fill = text, ...props }) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M16.25 6c.414 0 .75.336.75.75v9.5c0 .414-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75v-9.5c0-.414.336-.75.75-.75h9.5zm2.75 0c0-1.104-.896-2-2-2h-11c-1.104 0-2 .896-2 2v11c0 1.104.896 2 2 2h11c1.104 0 2-.896 2-2v-11zm-11 14v3h-1v-3h1zm4 0v3h-1v-3h1zm2 0v3h-1v-3h1zm-4 0v3h-1v-3h1zm6 0v3h-1v-3h1zm-8-20v3h-1v-3h1zm4 0v3h-1v-3h1zm2 0v3h-1v-3h1zm-4 0v3h-1v-3h1zm6 0v3h-1v-3h1zm4 15h3v1h-3v-1zm0-4h3v1h-3v-1zm0-2h3v1h-3v-1zm0 4h3v1h-3v-1zm0-6h3v1h-3v-1zm-20 8h3v1h-3v-1zm0-4h3v1h-3v-1zm0-2h3v1h-3v-1zm0 4h3v1h-3v-1zm0-6h3v1h-3v-1z"
                fill={fill}
            />
        </svg>
    );
}

export function FeaturesIcon({ fill = text, ...props }) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd">
            <path
                d="M7 16.462l1.526-.723c1.792-.81 2.851-.344 4.349.232 1.716.661 2.365.883 3.077 1.164 1.278.506.688 2.177-.592 1.838-.778-.206-2.812-.795-3.38-.931-.64-.154-.93.602-.323.818 1.106.393 2.663.79 3.494 1.007.831.218 1.295-.145 1.881-.611.906-.72 2.968-2.909 2.968-2.909.842-.799 1.991-.135 1.991.72 0 .23-.083.474-.276.707-2.328 2.793-3.06 3.642-4.568 5.226-.623.655-1.342.974-2.204.974-.442 0-.922-.084-1.443-.25-1.825-.581-4.172-1.313-6.5-1.6v-5.662zm-1 6.538h-4v-8h4v8zm15-11.497l-6.5 3.468v-7.215l6.5-3.345v7.092zm-7.5-3.771v7.216l-6.458-3.445v-7.133l6.458 3.362zm-3.408-5.589l6.526 3.398-2.596 1.336-6.451-3.359 2.521-1.375zm10.381 1.415l-2.766 1.423-6.558-3.415 2.872-1.566 6.452 3.558z"
                fill={fill}
            />
        </svg>
    );
}

export function RightChevron({ fill = text, ...props }) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"
                fill={fill}
            />
        </svg>
    );
}

export function UpChevron({ fill = text, ...props }) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"
                fill={fill}
                transform="rotate(-90 12 12)"
            />
        </svg>
    );
}

export function LeftChevron({ fill = text, ...props }) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"
                fill={fill}
                transform="rotate(180 12 12)"
            />
        </svg>
    );
}

export function EmailIcon({ fill = text, ...props }) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.021 17.824c-3.907 0-6.021-2.438-6.021-5.586 0-3.363 2.381-6.062 6.638-6.062 3.107 0 5.362 2.019 5.362 4.801 0 4.356-5.165 5.506-4.906 3.021-.354.555-.927 1.177-2.026 1.177-1.257 0-2.04-.92-2.04-2.403 0-2.222 1.461-4.1 3.19-4.1.829 0 1.399.438 1.638 1.11l.232-.816h1.169c-.122.416-1.161 4.264-1.161 4.264-.323 1.333.675 1.356 1.562.648 1.665-1.29 1.75-4.664-.499-6.071-2.411-1.445-7.897-.551-7.897 4.347 0 2.806 1.976 4.691 4.914 4.691 1.719 0 2.771-.465 3.648-.974l.588.849c-.856.482-2.231 1.104-4.391 1.104zm-1.172-7.153c-.357.67-.588 1.538-.588 2.212 0 1.805 1.761 1.816 2.626.12.356-.697.586-1.586.586-2.265 0-1.458-1.748-1.717-2.624-.067z"
                fill={fill}
            />
        </svg>
    );
}

export function CopyIcon({ fill = text, ...props }) {
    return (
        <svg
            {...props}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m6 18h-3c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v3h3c.621 0 1 .522 1 1v14c0 .621-.522 1-1 1h-14c-.48 0-1-.379-1-1zm1.5-10.5v13h13v-13zm9-1.5v-2.5h-13v13h2.5v-9.5c0-.481.38-1 1-1z"
                fillRule="nonzero"
                fill={fill}
            />
        </svg>
    );
}

export function ClockIcon({ fill = text, ...props }) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
                fill={fill}
            />
        </svg>
    );
}

export function CheckIcon({ fill = text, ...props }) {
    return (
        <svg
            {...props}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
                fillRule="nonzero"
                fill={fill}
            />
        </svg>
    );
}

export function ScrollArrow({ fill=text, ...props }) {
    return (
        <svg
            {...props}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z"
                fillRule="nonzero"
                fill={fill}
            />
        </svg>
    );
}

// Encoded using https://meyerweb.com/eric/tools/dencoder/
export const nodeJSULogoUrl = 'data:image/svg+xml;utf8,%3Csvg%20width%3D%22282%22%20height%3D%22282%22%20viewBox%3D%22-13%200%20282%20282%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20preserveAspectRatio%3D%22xMinYMin%20meet%22%3E%3Cg%20fill%3D%22%238CC84B%22%3E%3Cpath%20d%3D%22M116.504%203.58c6.962-3.985%2016.03-4.003%2022.986%200%2034.995%2019.774%2070.001%2039.517%20104.99%2059.303%206.581%203.707%2010.983%2011.031%2010.916%2018.614v118.968c.049%207.897-4.788%2015.396-11.731%2019.019-34.88%2019.665-69.742%2039.354-104.616%2059.019-7.106%204.063-16.356%203.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36%201.334-1.798%203.719-2.022%205.657-2.807%204.365-1.388%208.374-3.616%2012.384-5.778%201.014-.694%202.252-.428%203.224.193%208.942%205.127%2017.805%2010.403%2026.777%2015.481%201.914%201.105%203.852-.362%205.488-1.274%2034.228-19.345%2068.498-38.617%20102.72-57.968%201.268-.61%201.969-1.956%201.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621%203.621%200%2000-4.094-.006C91.2%2039.257%2056.465%2058.88%2021.712%2078.454c-1.42.646-2.373%202.071-2.204%203.653.006%2039.245%200%2078.497%200%20117.748a3.329%203.329%200%20001.89%203.303c9.274%205.259%2018.56%2010.481%2027.84%2015.722%205.228%202.814%2011.647%204.486%2017.407%202.33%205.083-1.823%208.646-7.01%208.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732%201.516-3.163%203.2-3%204.456-.03%208.918-.06%2013.374.012%201.86-.042%203.14%201.823%202.91%203.568-.018%2039.263.048%2078.527-.03%20117.79.012%2010.464-4.287%2021.85-13.966%2026.97-11.924%206.177-26.662%204.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368%20215.886.555%20208.357.604%20200.466V81.497c-.073-7.74%204.504-15.197%2011.29-18.85C46.768%2042.966%2081.636%2023.27%20116.504%203.58z%22%2F%3E%3Cpath%20d%3D%22M146.928%2085.99c15.21-.979%2031.493-.58%2045.18%206.913%2010.597%205.742%2016.472%2017.793%2016.659%2029.566-.296%201.588-1.956%202.464-3.472%202.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935%204.715-4.214%202.886-5.494%208.712-3.99%2013.404%201.418%203.369%205.307%204.456%208.489%205.458%2018.33%204.794%2037.754%204.317%2055.734%2010.626%207.444%202.572%2014.726%207.572%2017.274%2015.366%203.333%2010.446%201.872%2022.932-5.56%2031.318-6.027%206.901-14.805%2010.657-23.56%2012.697-11.647%202.597-23.734%202.663-35.562%201.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619%201.697-2.748%203.248-2.615%204.444-.036%208.888-.048%2013.332.006%201.775-.127%203.091%201.407%203.182%203.08.82%205.367%202.837%2011%207.517%2014.182%209.032%205.827%2020.365%205.428%2030.707%205.591%208.568-.38%2018.186-.495%2025.178-6.158%203.689-3.23%204.782-8.634%203.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662%206.098-31.765%208.006-8.06%2019.563-11.164%2030.551-12.275z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E';
export const pythonMonocolorLogoUrl = 'data:image/svg+xml;utf8,%3Csvg%20width%3D%22512%22%20height%3D%22512%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22black%22%3E%3Cpath%20d%3D%22M314%2036.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09%20311.09%200%2000-51.66%204.38c-45.74%208-54.07%2024.7-54.07%2055.54V128h112v16H107.62C66.06%20144%2032.33%20193.67%2032%20255.12v.88a162.91%20162.91%200%20003.13%2032c9.29%2046.28%2038.23%2080%2072.49%2080H128v-54c0-31.3%2020.84-59.95%2055-66.1l9.87-1.23H314a56.05%2056.05%200%200015.06-2A52.48%2052.48%200%2000368%20193.68V91.92c0-28.92-24.68-50.73-54-55.54zM194.93%20105.5a20.37%2020.37%200%201120.3-20.3%2020.29%2020.29%200%2001-20.3%2020.3z%22%2F%3E%3Cpath%20d%3D%22M475.28%20217c-10.7-42.61-38.41-73-70.9-73h-17.71v47.45c0%2039.57-26%2068.22-57.74%2073.13a63.54%2063.54%200%2001-9.69.75H198.08a60%2060%200%2000-15.23%201.95C160.54%20273.14%20144%20291.7%20144%20315.77v101.77c0%2029%2029.14%2046%2057.73%2054.31%2034.21%209.95%2071.48%2011.75%20112.42%200%2027.19-7.77%2053.85-23.48%2053.85-54.31V384H256v-16h148.38c29.44%200%2054.95-24.93%2067.45-61.31A156.83%20156.83%200%2000480%20256a160.64%20160.64%200%2000-4.72-39zM316.51%20404a20.37%2020.37%200%2011-20.3%2020.3%2020.29%2020.29%200%200120.3-20.3z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E';
export const pythonMulticolorLogoUrl = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%220%200%20110%20110%22%20version%3D%221.0%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22prefix__a%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23ffe052%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23ffc331%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%22168.101%22%20x2%3D%22147.777%22%20y1%3D%22111.921%22%20x1%3D%2289.137%22%20id%3D%22prefix__d%22%20xlink%3Ahref%3D%22%23prefix__a%22%2F%3E%3ClinearGradient%20id%3D%22prefix__b%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23387eb8%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23366994%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%22131.853%22%20x2%3D%22110.149%22%20y1%3D%2277.07%22%20x1%3D%2255.549%22%20id%3D%22prefix__c%22%20xlink%3Ahref%3D%22%23prefix__b%22%2F%3E%3C%2Fdefs%3E%3Cg%20color%3D%22%23000%22%3E%3Cpath%20style%3D%22marker%3Anone%22%20d%3D%22M99.75%2067.469c-28.032%200-26.281%2012.156-26.281%2012.156l.031%2012.594h26.75V96H62.875s-17.938-2.034-17.938%2026.25%2015.657%2027.281%2015.657%2027.281h9.343v-13.125s-.503-15.656%2015.407-15.656h26.531s14.906.241%2014.906-14.406V82.125s2.263-14.656-27.031-14.656zM85%2075.938a4.808%204.808%200%20014.813%204.812A4.808%204.808%200%200185%2085.563a4.808%204.808%200%2001-4.813-4.813A4.808%204.808%200%200185%2075.937z%22%20fill%3D%22url(%23prefix__c)%22%20overflow%3D%22visible%22%20transform%3D%22translate(-44.938%20-67.469)%22%2F%3E%3Cpath%20d%3D%22M100.546%20177.315c28.032%200%2026.281-12.156%2026.281-12.156l-.03-12.594h-26.75v-3.781h37.374s17.938%202.034%2017.938-26.25c0-28.285-15.657-27.282-15.657-27.282h-9.343v13.125s.503%2015.657-15.407%2015.657h-26.53s-14.907-.241-14.907%2014.406v24.219s-2.263%2014.656%2027.031%2014.656zm14.75-8.469a4.808%204.808%200%2001-4.812-4.812%204.808%204.808%200%20014.812-4.813%204.808%204.808%200%20014.813%204.813%204.808%204.808%200%2001-4.813%204.812z%22%20style%3D%22marker%3Anone%22%20fill%3D%22url(%23prefix__d)%22%20overflow%3D%22visible%22%20transform%3D%22translate(-44.938%20-67.469)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E';
export const reactLogoUrl = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%22-11.5%20-10.232%2023%2020.463%22%3E%3Ccircle%20r%3D%222.05%22%20fill%3D%22%2361dafb%22%2F%3E%3Cg%20stroke%3D%22%2361dafb%22%20fill%3D%22none%22%3E%3Cellipse%20rx%3D%2211%22%20ry%3D%224.2%22%2F%3E%3Cellipse%20rx%3D%2211%22%20ry%3D%224.2%22%20transform%3D%22rotate(60)%22%2F%3E%3Cellipse%20rx%3D%2211%22%20ry%3D%224.2%22%20transform%3D%22rotate(120)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E';
export const electonLogoUrl = 'data:image/svg+xml;utf8,%3Csvg%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20fill%3D%22%232B2E3A%22%20cx%3D%22128%22%20cy%3D%22128%22%20r%3D%22128%22%2F%3E%3Cg%20fill%3D%22%239FEAF9%22%20fill-rule%3D%22nonzero%22%3E%3Cpath%20d%3D%22M100.502%2071.69c-26.005-4.736-46.567.221-54.762%2014.415-6.115%2010.592-4.367%2024.635%204.24%2039.646a2.667%202.667%200%20104.626-2.653c-7.752-13.522-9.261-25.641-4.247-34.326%206.808-11.791%2025.148-16.213%2049.187-11.835a2.667%202.667%200%2000.956-5.247zm-36.999%2072.307c10.515%2011.555%2024.176%2022.394%2039.756%2031.388%2037.723%2021.78%2077.883%2027.601%2097.675%2014.106a2.667%202.667%200%2010-3.005-4.406c-17.714%2012.078-55.862%206.548-92.003-14.318-15.114-8.726-28.343-19.222-38.478-30.36a2.667%202.667%200%2010-3.945%203.59z%22%2F%3E%3Cpath%20d%3D%22M194.62%20140.753c17.028-20.116%2022.973-40.348%2014.795-54.512-6.017-10.423-18.738-15.926-35.645-16.146a2.667%202.667%200%2000-.069%205.333c15.205.198%2026.165%204.939%2031.096%2013.48%206.792%2011.765%201.49%2029.807-14.248%2048.399a2.667%202.667%200%20104.071%203.446zm-43.761-68.175c-15.396%203.299-31.784%209.749-47.522%2018.835-38.942%2022.483-64.345%2055.636-60.817%2079.675a2.667%202.667%200%20105.277-.775c-3.133-21.344%2020.947-52.769%2058.207-74.281%2015.267-8.815%2031.135-15.06%2045.972-18.239a2.667%202.667%200%2010-1.117-5.215z%22%2F%3E%3Cpath%20d%3D%22M87.77%20187.753c8.904%2024.86%2023.469%2040.167%2039.847%2040.167%2011.945%200%2022.996-8.143%2031.614-22.478a2.667%202.667%200%2010-4.571-2.748c-7.745%2012.883-17.258%2019.892-27.043%2019.892-13.605%200-26.596-13.652-34.825-36.63a2.667%202.667%200%2010-5.021%201.797zm81.322-4.863c4.61-14.728%207.085-31.718%207.085-49.423%200-44.179-15.463-82.263-37.487-92.042a2.667%202.667%200%2000-2.164%204.874c19.643%208.723%2034.317%2044.866%2034.317%2087.168%200%2017.177-2.397%2033.63-6.84%2047.83a2.667%202.667%200%20105.09%201.593zm50.224-2.612c0-7.049-5.714-12.763-12.763-12.763-7.049%200-12.763%205.714-12.763%2012.763%200%207.049%205.714%2012.763%2012.763%2012.763%207.049%200%2012.763-5.714%2012.763-12.763zm-5.333%200a7.43%207.43%200%2011-14.86%200%207.43%207.43%200%200114.86%200zM48.497%20193.041c7.05%200%2012.764-5.714%2012.764-12.763%200-7.049-5.715-12.763-12.764-12.763-7.048%200-12.763%205.714-12.763%2012.763%200%207.049%205.715%2012.763%2012.763%2012.763zm0-5.333a7.43%207.43%200%20110-14.86%207.43%207.43%200%20010%2014.86z%22%2F%3E%3Cpath%20d%3D%22M127.617%2054.444c7.049%200%2012.763-5.714%2012.763-12.763%200-7.049-5.714-12.763-12.763-12.763-7.049%200-12.763%205.714-12.763%2012.763%200%207.049%205.714%2012.763%2012.763%2012.763zm0-5.333a7.43%207.43%200%20110-14.86%207.43%207.43%200%20010%2014.86zm1.949%2093.382c-4.985%201.077-9.896-2.091-10.975-7.076a9.236%209.236%200%20017.076-10.976c4.985-1.077%209.896%202.091%2010.976%207.076%201.077%204.985-2.091%209.897-7.077%2010.976z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
export const discordLogoUrl = 'data:image/svg+xml;utf8,%3Csvg%20width%3D%2271%22%20height%3D%2255%22%20viewBox%3D%220%200%2071%2055%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url(%23prefix__clip0)%22%3E%3Cpath%20d%3D%22M60.105%204.898A58.55%2058.55%200%200045.653.415a.22.22%200%2000-.233.11%2040.784%2040.784%200%2000-1.8%203.697c-5.456-.817-10.886-.817-16.23%200-.485-1.164-1.201-2.587-1.828-3.697a.228.228%200%2000-.233-.11%2058.386%2058.386%200%2000-14.451%204.483.207.207%200%2000-.095.082C1.578%2018.73-.944%2032.144.293%2045.39a.244.244%200%2000.093.167c6.073%204.46%2011.955%207.167%2017.729%208.962a.23.23%200%2000.249-.082%2042.08%2042.08%200%20003.627-5.9.225.225%200%2000-.123-.312%2038.772%2038.772%200%2001-5.539-2.64.228.228%200%2001-.022-.378c.372-.279.744-.569%201.1-.862a.22.22%200%2001.23-.03c11.619%205.304%2024.198%205.304%2035.68%200a.219.219%200%2001.233.027c.356.293.728.586%201.103.865a.228.228%200%2001-.02.378%2036.384%2036.384%200%2001-5.54%202.637.227.227%200%2000-.121.315%2047.249%2047.249%200%20003.624%205.897.225.225%200%2000.249.084c5.801-1.794%2011.684-4.502%2017.757-8.961a.228.228%200%2000.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18%200%2000-.093-.084zm-36.38%2032.427c-3.497%200-6.38-3.211-6.38-7.156%200-3.944%202.827-7.156%206.38-7.156%203.583%200%206.438%203.24%206.382%207.156%200%203.945-2.827%207.156-6.381%207.156zm23.593%200c-3.498%200-6.38-3.211-6.38-7.156%200-3.944%202.826-7.156%206.38-7.156%203.582%200%206.437%203.24%206.38%207.156%200%203.945-2.798%207.156-6.38%207.156z%22%20fill%3D%22%235865F2%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22prefix__clip0%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h71v55H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E';
export const postgresLogoUrl = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2250%22%20viewBox%3D%220%200%2025.6%2025.6%22%20width%3D%2250%22%3E%3Cstyle%3E.prefix__B%7Bstroke-linecap%3Around%7D.prefix__C%7Bstroke-linejoin%3Around%7D.prefix__D%7Bstroke-linejoin%3Amiter%7D.prefix__E%7Bstroke-width%3A.716%7D%3C%2Fstyle%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23fff%22%3E%3Cpath%20d%3D%22M18.983%2018.636c.163-1.357.114-1.555%201.124-1.336l.257.023c.777.035%201.793-.125%202.4-.402%201.285-.596%202.047-1.592.78-1.33-2.89.596-3.1-.383-3.1-.383%203.053-4.53%204.33-10.28%203.227-11.687-3.004-3.84-8.205-2.024-8.292-1.976l-.028.005c-.57-.12-1.2-.19-1.93-.2-1.308-.02-2.3.343-3.054.914%200%200-9.277-3.822-8.846%204.807.092%201.836%202.63%2013.9%205.66%2010.25C8.29%2015.987%209.36%2014.86%209.36%2014.86c.53.353%201.167.533%201.834.468l.052-.044a2.01%202.01%200%2000.021.518c-.78.872-.55%201.025-2.11%201.346-1.578.325-.65.904-.046%201.056.734.184%202.432.444%203.58-1.162l-.046.183c.306.245.285%201.76.33%202.842s.116%202.093.337%202.688.48%202.13%202.53%201.7c1.713-.367%203.023-.896%203.143-5.81%22%20fill%3D%22%23000%22%20stroke%3D%22%23000%22%20stroke-width%3D%222.149%22%20class%3D%22prefix__D%22%2F%3E%3Cpath%20d%3D%22M23.535%2015.6c-2.89.596-3.1-.383-3.1-.383%203.053-4.53%204.33-10.28%203.228-11.687-3.004-3.84-8.205-2.023-8.292-1.976l-.028.005a10.31%2010.31%200%2000-1.929-.201c-1.308-.02-2.3.343-3.054.914%200%200-9.278-3.822-8.846%204.807.092%201.836%202.63%2013.9%205.66%2010.25C8.29%2015.987%209.36%2014.86%209.36%2014.86c.53.353%201.167.533%201.834.468l.052-.044a2.02%202.02%200%2000.021.518c-.78.872-.55%201.025-2.11%201.346-1.578.325-.65.904-.046%201.056.734.184%202.432.444%203.58-1.162l-.046.183c.306.245.52%201.593.484%202.815s-.06%202.06.18%202.716.48%202.13%202.53%201.7c1.713-.367%202.6-1.32%202.725-2.906.088-1.128.286-.962.3-1.97l.16-.478c.183-1.53.03-2.023%201.085-1.793l.257.023c.777.035%201.794-.125%202.39-.402%201.285-.596%202.047-1.592.78-1.33z%22%20fill%3D%22%23336791%22%20stroke%3D%22none%22%2F%3E%3Cg%20class%3D%22prefix__E%22%3E%3Cg%20class%3D%22prefix__B%22%3E%3Cpath%20d%3D%22M12.814%2016.467c-.08%202.846.02%205.712.298%206.4s.875%202.05%202.926%201.612c1.713-.367%202.337-1.078%202.607-2.647l.633-5.017M10.356%202.2S1.072-1.596%201.504%207.033c.092%201.836%202.63%2013.9%205.66%2010.25C8.27%2015.95%209.27%2014.907%209.27%2014.907m6.1-13.4c-.32.1%205.164-2.005%208.282%201.978%201.1%201.407-.175%207.157-3.228%2011.687%22%20class%3D%22prefix__C%22%2F%3E%3Cpath%20d%3D%22M20.425%2015.17s.2.98%203.1.382c1.267-.262.504.734-.78%201.33-1.054.49-3.418.615-3.457-.06-.1-1.745%201.244-1.215%201.147-1.652-.088-.394-.69-.78-1.086-1.744-.347-.84-4.76-7.29%201.224-6.333.22-.045-1.56-5.7-7.16-5.782S7.99%208.196%207.99%208.196%22%20stroke-linejoin%3D%22bevel%22%2F%3E%3C%2Fg%3E%3Cg%20class%3D%22prefix__C%22%3E%3Cpath%20d%3D%22M11.247%2015.768c-.78.872-.55%201.025-2.11%201.346-1.578.325-.65.904-.046%201.056.734.184%202.432.444%203.58-1.163.35-.49-.002-1.27-.482-1.468-.232-.096-.542-.216-.94.23z%22%2F%3E%3Cpath%20d%3D%22M11.196%2015.753c-.08-.513.168-1.122.433-1.836.398-1.07%201.316-2.14.582-5.537-.547-2.53-4.22-.527-4.22-.184s.166%201.74-.06%203.365c-.297%202.122%201.35%203.916%203.246%203.733%22%20class%3D%22prefix__B%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20fill%3D%22%23fff%22%20class%3D%22prefix__D%22%3E%3Cpath%20d%3D%22M10.322%208.145c-.017.117.215.43.516.472s.558-.202.575-.32-.215-.246-.516-.288-.56.02-.575.136z%22%20stroke-width%3D%22.239%22%2F%3E%3Cpath%20d%3D%22M19.486%207.906c.016.117-.215.43-.516.472s-.56-.202-.575-.32.215-.246.516-.288.56.02.575.136z%22%20stroke-width%3D%22.119%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M20.562%207.095c.05.92-.198%201.545-.23%202.524-.046%201.422.678%203.05-.413%204.68%22%20class%3D%22prefix__B%20prefix__C%20prefix__E%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E';
export const mongoLogoUrl = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20d%3D%22M15.9.087l.854%201.604c.192.296.4.558.645.802a22.406%2022.406%200%20012.004%202.266c1.447%201.9%202.423%204.01%203.12%206.292.418%201.394.645%202.824.662%204.27.07%204.323-1.412%208.035-4.4%2011.12a12.7%2012.7%200%2001-1.57%201.342c-.296%200-.436-.227-.558-.436a3.589%203.589%200%2001-.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244C16.057%2024.21%2015.796.21%2015.9.087z%22%20fill%3D%22%23599636%22%2F%3E%3Cpath%20d%3D%22M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55%201.342-2.77%202.963-3.747%204.776-1.3%202.44-1.97%205.055-2.16%207.808-.087.993.314%204.497.627%205.508.854%202.684%202.388%204.933%204.375%206.885.488.47%201.01.906%201.55%201.325.157%200%20.174-.14.21-.244a4.78%204.78%200%2000.157-.68l.35-2.614L15.9.034z%22%20fill%3D%22%236cac48%22%2F%3E%3Cpath%20d%3D%22M16.754%2028.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235%203.235%200%2001-.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37%2017.37%200%2001-.314%202.353c-.052.314-.087.627-.28.906%200%20.035%200%20.07.017.122.314.924.4%201.865.453%202.824v.35c0%20.418-.017.33.33.47.14.052.296.07.436.174.105%200%20.122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z%22%20fill%3D%22%23c2bfbf%22%2F%3E%3C%2Fsvg%3E';
export const typescriptLogoUrl = 'data:image/svg+xml;utf8,%3Csvg%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%220%200%20512%20512%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22512%22%20height%3D%22512%22%20rx%3D%2250%22%20fill%3D%22%233178c6%22%2F%3E%3Cpath%20d%3D%22M317%20407v50c8.1%204.2%2018%207.3%2029%209.4s23%203.1%2035%203.1%2023-1.1%2034-3.4%2020-6.1%2028-11c8.1-5.3%2015-12%2019-21s7.1-19%207.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10%200-3.4.89-6.5%202.7-9.3s4.3-5.1%207.5-7.1%207.2-3.5%2012-4.6c4.7-1.1%209.9-1.6%2016-1.6%204.2%200%208.6.31%2013%20.94%204.6.63%209.3%201.6%2014%202.9%204.7%201.3%209.3%202.9%2014%204.9%204.4%202%208.5%204.3%2012%206.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1-23%201.3-34%203.8-20%206.5-28%2012c-8.1%205.4-14%2012-19%2021-4.7%208.4-7%2018-7%2030%200%2015%204.3%2028%2013%2038%208.6%2011%2022%2019%2039%2027%206.9%202.8%2013%205.6%2019%208.3s11%205.5%2015%208.4c4.3%202.9%207.7%206.1%2010%209.5%202.5%203.4%203.8%207.4%203.8%2012%200%203.2-.78%206.2-2.3%209s-3.9%205.2-7.1%207.2-7.1%203.6-12%204.8c-4.7%201.1-10%201.7-17%201.7-11%200-22-1.9-32-5.7-11-3.8-21-9.5-30-17zm-84-123h64v-41H118v41h64v183h51z%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E';
export const externalLinkUrl = (fill = '#ffffff') => `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%27${fill.replace('#', '%23')}%27%20d%3D%22M21%2013v10H0V4h12v2H2v15h17v-8h2zm3-12H13.012l4.035%204-6.977%207.07%202.828%202.828%206.977-7.07L24%2012V1z%22%2F%3E%3C%2Fsvg%3E`;
