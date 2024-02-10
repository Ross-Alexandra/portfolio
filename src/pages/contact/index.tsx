import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import {
    CheckIcon,
    ClockIcon,
    ContactBackdrop,
    CopyIcon,
    EmailIcon,
    LinkedInLogo,
} from '../../assets';
import { primaryButtonCSS } from '../../elements';
import {
    headerHeight,
    layerColor,
    maxTabletBreakpoint,
    portfolioBackground,
    text,
} from '../../theme';

const Wrapper = styled.div<{ footerHeight: number }>`
    margin-top: ${headerHeight}px;
    min-height: calc(100svh - ${headerHeight}px - ${({ footerHeight }) => footerHeight ?? 0}px);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content minmax(0px, 1fr);
    place-items: center;
    
    grid-gap: 20px;
    padding: 20px;

    background-image: linear-gradient(${portfolioBackground}80, ${portfolioBackground}80), url(${ContactBackdrop});
    background-repeat: no-repeat;
    background-size: cover;

    h1 {
        grid-column: 1 / -1;
        text-align: center;
    }

    .contact-info {
        display: grid;
        grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr);
        grid-gap: 20px;

        height: 100%;

        @media (max-width: ${maxTabletBreakpoint}px) {
            grid-template-columns: minmax(0px, 1fr);
        }

        .contact-info__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;

            background-image: 
                linear-gradient(${layerColor}, ${layerColor}),
                linear-gradient(${portfolioBackground}, ${portfolioBackground});

            @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
                backdrop-filter: blur(15px) brightness(0.8);
                background-image: unset;
            }

            background-color: ${layerColor};
            padding: 20px;
            border-radius: 10px;
            border: 1px solid ${text}80;

            a {
                text-decoration: none;
                ${primaryButtonCSS}
            }
        }

        .email {
            display: flex;
            flex-direction: row;
            align-items: center;

            gap: 10px;

            .copy-icon {
                cursor: pointer;
            }
        }
    }
`;

type ContactProps = Omit<React.HTMLProps<HTMLDivElement>, 'as'>

export const Contact: React.FC<ContactProps> = ({
    ...props
}) => {
    const [footerHeight, setFooterHeight] = React.useState(document.getElementsByTagName('footer')?.[0]?.clientHeight);

    React.useEffect(() => {
        function resizeFooter() {
            const footerHeight = document.getElementsByTagName('footer')?.[0].clientHeight;

            console.log('footerHeight', footerHeight);
            setFooterHeight(footerHeight);
        }

        window.addEventListener('resize', resizeFooter);
        window.addEventListener('load', resizeFooter);

        return () => {
            window.removeEventListener('resize', resizeFooter);
            window.removeEventListener('load', resizeFooter);
        };
    }, [setFooterHeight]);

    const [copied, setCopied] = React.useState(false);
    React.useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => {
                setCopied(false);
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [copied]);

    return (
        <Wrapper
            footerHeight={footerHeight}
            {...props}
        >
            <Global 
                styles={css`
                    /*
                        Override styling which would add padding
                        to the bottom of the page.
                    */
                    footer {
                        margin-top: 0px !important;
                    }

                    .scroll-to-top-button {
                        display: none;
                    }
                `}
            />

            <h1>Contact Me!</h1>
            <div className='contact-info'>
                <div className='contact-info__item'>
                    <h3>Get in Touch</h3>
                    <p>Send me an email any time, and I&apos;ll get back to you soon</p>
                </div>
                <div className='contact-info__item'>
                    <ClockIcon width={50} height={50} />
                    <h3>Available</h3>
                    <p>Monday - Friday: 8:30am - 5:00pm</p>
                    <p>Pacific Time (Vancouver, BC, Canada)</p>
                </div>
                <div className='contact-info__item'>
                    <EmailIcon width={50} height={50} />
                    <div className='email'>
                        <p>Ross-Alexandra@outlook.com</p>
                        {copied ? (
                            <CheckIcon width={20} height={20} />
                        ) : (
                            <CopyIcon
                                width={20}
                                height={20}
                                className='copy-icon'
                                onClick={() => {
                                    setCopied(true);
                                    navigator.clipboard.writeText('Ross-Alexandra@outlook.com');
                                }}
                            />
                        )}
                    </div>
                </div>
                <div className='contact-info__item'>
                    <LinkedInLogo fill={text} width={50} height={50} />
                    <a
                        href='https://www.linkedin.com/in/ross-alexandra-5201ab149/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Connect With Me
                    </a>
                </div>
            </div>
        </Wrapper>
    );
};
