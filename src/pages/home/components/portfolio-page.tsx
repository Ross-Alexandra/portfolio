import styled from '@emotion/styled';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { PortfolioPageInfo } from '../../../app-data/portfolio-items';
import { ExternalLink } from '../../../assets';
import { primaryButtonCSS } from '../../../elements';
import {
    defaultFont,
    layerColor,
    maxPhoneBreakpoint,
    maxSmallPhoneBreakpoint,
    portfolioBackground,
} from '../../../theme';
import { Carousel } from '../../../ui-atoms/carousel';

const Wrapper = styled.div<{backgroundImage: string}>`
    display: flex;
    flex-direction: column;

    .portfolio-page {
        display: grid;
        place-items: center;
        position: relative;

        min-height: 100svh;

        padding: 15px 30px;

        overflow: hidden;

        ::before {
            content: "";
            
            position: absolute;
            inset: 0px;

            background-image: url("${({ backgroundImage }) => backgroundImage}");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;

            opacity: 0.35;
            filter: blur(10px);
        }

        @media (max-width: ${maxPhoneBreakpoint}px) {
            padding: 50px 5px 150px 5px;
        }

        h2 {
            font-size: 35px;
        }

        & > div {
            position: relative;

            display: flex;
            flex-direction: column;
            gap: 10px;
            
            width: fit-content;
            max-width: 50%;
            padding: 15px;
            border-radius: 10px;

            background-image:
                linear-gradient(90deg, ${layerColor}, ${layerColor}),
                linear-gradient(90deg, ${portfolioBackground}, ${portfolioBackground});

            @media (max-width: ${maxPhoneBreakpoint}px) {
                position: relative;
                top: unset;
                left: unset;
                transform: unset;

                max-width: unset;
            }

            h2, h3, p {
                align-self: flex-start;

                max-width: 900px;
            }
        }

        .primary-tiles {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            gap: 30px;

            @media (max-width: ${maxPhoneBreakpoint}px) {
                display: grid;
                grid-template-columns: repeat(2, 1fr);

                &[data-tiles="1"] {
                    grid-template-columns: 1fr;
                }
            }

            @media (max-width: ${maxSmallPhoneBreakpoint}px) {
                display: grid;
                grid-template-columns: 1fr;
            }

            img {
                width: 150px;
                aspect-ratio: 1;
                border-radius: 10px;
            }

            .primary-tile {
                display: flex;
                flex-direction: column;
                align-items: center;

                gap: 5px;
            }

            .tile-info {
                display: flex;
                flex-direction: row;

                align-items: center;
                justify-content: space-between;
            }
        }

        .buttons {
            align-self: end;

            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: 1fr;
            align-items: center;
            gap: 10px;

            width: 100%;

            @media (max-width: ${maxPhoneBreakpoint}px) {
                grid-auto-flow: row;
                grid-auto-rows: 1fr;

                place-items: center;
            }

            a {
                width: 100%;
            }
        }

        a:not(.button) {
            text-decoration: none;
            cursor: pointer;

            width: 100%;
            font-family: ${defaultFont};
            color: white;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }

        a.button {
            ${primaryButtonCSS}
            text-decoration: none;
        }

        .featured-tile {
            display: flex;
            flex-direction: column;
            margin-top: 10px;
            gap: 10px;
            
            align-items: center;
        }

        .featured-image {
            img {
                max-height: 300px;
                border-radius: 10px;

                cursor: zoom-in;
            }

            .hover {
                display: none;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                max-height: 95%;
                max-width: 95%;
                object-fit: contain;

                box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
                z-index: 1;

                cursor: zoom-out;
                @media (max-width: ${maxPhoneBreakpoint}px) {
                    height: unset;
                    width: 95%;
                }

                &.focused {
                    display: unset;
                }
            }
        }
    }
`;

type PortfolioPageProps = Omit<React.HTMLProps<HTMLDivElement>, 'as'> & PortfolioPageInfo;

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
    title,
    intro,
    primaryTiles,
    featureTitle,
    featureDescription,
    featureImages,
    buttons,
    ...props
}) => {
    const [focusedImage, setFocusedImage] = React.useState<string | undefined>(undefined);

    return (
        <Wrapper {...props} className='portfolio-page'>
            <div id={title.toLowerCase().replaceAll(' ', '-')} className='portfolio-page'>
                <div>
                    <h2>{title}</h2>
                    <p>{intro}</p>

                    <div className="primary-tiles" data-tiles={primaryTiles.length}>
                        {primaryTiles.map((tile, index) => 
                            <div key={index} className="primary-tile">
                                <img src={tile.image} alt={tile.title} />
                                <div className='tile-info'>
                                    {tile.externalLink && 
                                        <a
                                            href={tile.externalLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {tile.title}
                                            <ExternalLink width={15} height={15} />
                                        </a>
                                    }
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='featured-tile'>
                        {featureTitle && <h3>{featureTitle}</h3>}
                        {featureDescription && <p>{featureDescription}</p>}
                        { featureImages && featureImages.length >= 1 &&
                            <div className='featured-image'>

                                <Carousel 
                                    images={featureImages}
                                    onClickActiveImage={image => setFocusedImage(image)}
                                />
                                
                                <img 
                                    className={`hover ${focusedImage ? 'focused' : ''}`}
                                    src={focusedImage}
                                    alt="Pick Ban Hover Effect"
                                    onClick={() => setFocusedImage(undefined)}
                                />
                            </div>
                        }
                    </div>

                    <div className='buttons'>
                        {buttons.map((button, index) =>
                            <HashLink
                                key={index}
                                className='button'
                                to={button.link}  
                                target={button.external ? '_blank' : ''}
                                rel={button.external ? 'noopener noreferrer' : ''}
                            >
                                {button.text}
                            </HashLink>
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
