import styled from '@emotion/styled';
import React from 'react';

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
            z-index: -1;
        }

        @media (max-width: ${maxPhoneBreakpoint}px) {
            padding: 5px;
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
            min-width: 50%;
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

                max-height: unset;
            }

            h2, h3, p {
                align-self: flex-start;

                max-width: 900px;
            }
        }

        .primary-tiles {
            display: grid;
            grid-template-columns: repeat(4, 1fr);

            gap: 30px;

            @media (max-width: ${maxPhoneBreakpoint}px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: ${maxSmallPhoneBreakpoint}px) {
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
                width: 100%;

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

                height: 95%;

                max-height: unset;
                max-width: 95%;

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
        <Wrapper {...props}>
            <div id={title.toLowerCase().replaceAll(' ', '-')} className='portfolio-page'>
                <div>
                    <h2>{title}</h2>
                    <p>{intro}</p>

                    <div className="primary-tiles">
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
                    </div>

                    <div className='buttons'>
                        {buttons.map((button, index) =>
                            <a
                                key={index}
                                className='button'
                                href={button.link}  
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {button.text}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
