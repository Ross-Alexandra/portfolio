import styled from '@emotion/styled';
import React from 'react';

import { primaryButtonCSS } from '../../../elements';
import {
    layerColor,
    maxDesktopBreakpoint,
    maxPhoneBreakpoint,
    maxTabletBreakpoint,
    text,
} from '../../../theme';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 200px auto;

    width: 100%;
    max-width: 2000px;
    margin: 0px auto;

    background-color: ${layerColor};
    border-radius: 10px;
    padding: 20px;
    border: 1px solid ${text}80;

    @media (max-width: ${maxPhoneBreakpoint}px) {
        grid-template-columns: unset;
        grid-template-rows: min-content auto;

        padding: 10px;

        img {
            width: 100%;
        }
    }

    h3 {
        font-size: 28px;
        font-weight: 700;

        width: 100%;
        text-transform: capitalize;
    }

    h4 {
        font-size: 20px;
        font-weight: 500;
    }

    h5 {
        font-size: 15px;
        font-weight: 500;

        @media (max-width: ${maxPhoneBreakpoint}px) {
            padding-bottom: 10px;
        }
    }

    .company-info {
        display: flex;
        flex-direction: column;
        padding-right: 15px;
        gap: 10px;

        border-right: 1px solid ${text}20;

        text-transform: uppercase;

        @media (max-width: ${maxPhoneBreakpoint}px) {
            padding-right: unset;
            border-right: unset;

            padding-bottom: 15px;
        }
        
        img {
            width: 100%;
            aspect-ratio: 1;

            border-radius: 10px;
        }
    }

    .position-info {
        display: flex;
        flex-direction: column;

        width: 100%;

        padding: 0px 10px;

        @media (max-width: ${maxPhoneBreakpoint}px) {
            padding: 10px 0px;
        }
    }

    .description {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;

        padding: 20px 0px;

        @media (max-width: ${maxDesktopBreakpoint}px) {
            grid-template-columns: unset;
            grid-template-rows: 1fr 1fr 1fr;

            padding: 10px 0px 0px 0px;
        }

        @media (max-width: ${maxPhoneBreakpoint}px) {
            border-top: 1px solid ${text}20;
        }
    }

    .description-content {
        display: flex;
        flex-direction: column;
        gap: 10px;

        svg,
        h4 {
            align-self: center;

            @media (max-width: ${maxDesktopBreakpoint}px) {
                align-self: unset;
            }
        }

        ul {
            margin: 0px;
            line-height: 1.3;
        }
    }

    .links {
        grid-column: 1 / -1;
        justify-self: center;
        align-self: center;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        gap: 40px;

        width: 50%;

        @media (max-width: ${maxDesktopBreakpoint}px) {
            margin-top: 20px;
        }

        @media (max-width: ${maxTabletBreakpoint}px) {
            width: 100%;
        }

        @media (max-width: ${maxPhoneBreakpoint}px) {
            flex-direction: column;

            margin-top: 10px;
            gap: 10px;
        }

        a {
            ${primaryButtonCSS}
            text-decoration: none;

            width: 100%;
        }
    }
`;

type ExperienceCardProps = Omit<React.HTMLProps<HTMLDivElement>, 'as'> & {
    cardTitle: string;
    image: string;
    sectionTitle: string;
    sectionSubtitle: string;
    columnNames: string[];
    columnImages: React.ReactNode[];
    columnData: string[][];
    buttonLinks: {[buttonLink: string]: string};
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
    cardTitle,
    image,
    sectionTitle,
    sectionSubtitle,
    columnNames,
    columnImages,
    columnData,
    buttonLinks,
    ...props
}) => {
    const columns = columnNames.map((name, index) => {
        const image = columnImages[index];
        const data = columnData[index];

        return {
            name,
            image,
            data,
        };
    });

    return (
        <Wrapper id={cardTitle.toLowerCase().replaceAll(' ', '-')} {...props}>
            <div className="company-info">
                <h3>{cardTitle}</h3>
                <div className="logo-container">
                    <img src={image} alt="Battlefy Logo" />
                </div>
            </div>

            <div className='position-info'>
                <h3>{sectionTitle}</h3>
                <h5>{sectionSubtitle}</h5>
                <div className="description">
                    {columns.map(({ name, image, data }) => 
                        <div className="description-content" key={name}>
                            {image}
                            <h4>{name}</h4>
                            <ul>
                                {data.map(item =>
                                    <li key={item}>{item}</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="links">
                {Object.entries(buttonLinks).map(([link, text]) => 
                    <a href={link} key={link}>
                        {text}
                    </a>
                )}
            </div>
        </Wrapper>
    );
};
