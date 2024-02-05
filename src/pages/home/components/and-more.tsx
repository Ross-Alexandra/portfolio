import styled from '@emotion/styled';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { PortfolioAndMoreInfo } from '../../../app-data/portfolio-and-more';
import { primaryButtonCSS } from '../../../elements';
import { layerColor } from '../../../theme';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 10px;

    background-color: ${layerColor};
    border-radius: 10px;

    h3 {
        font-size: 28px;
        align-self: start;
    }

    img {
        width: 50%;
        max-width: 300px;

        border-radius: 10px;
    }

    .links {
        display: flex;
        flex-direction: row;
        gap: 10px;

        align-self: end;
        align-items: center;
    }

    a {
        text-decoration: none;
        ${primaryButtonCSS}
    }
`;

type AndMoreProps = Omit<React.HTMLProps<HTMLDivElement>, 'as'> & PortfolioAndMoreInfo;

export const AndMore: React.FC<AndMoreProps> = ({
    title,
    description,
    image,
    externalLinks,
    ...props
}) => {
    return (
        <Wrapper {...props}>
            <img src={image} alt='Recipe List Banner' />
            <h3>{title}</h3>

            <p>{description}</p>
            <div className='links'>
                {externalLinks?.map((link, index) =>
                    <HashLink
                        key={index}
                        to={link.link}
                        target={link.external ? '_blank' : '_self'}
                        rel={link.external ? 'noopener noreferrer' : ''}
                    >
                        {link.text}
                    </HashLink>
                )}
            </div>
        </Wrapper>
    );
};
