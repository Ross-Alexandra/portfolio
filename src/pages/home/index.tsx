import styled from '@emotion/styled';
import React from 'react';

import { PortfolioAndMore } from '../../app-data/portfolio-and-more';
import { PortfolioPages } from '../../app-data/portfolio-items';
import { maxLaptopBreakpoint, maxPhoneBreakpoint } from '../../theme';

import { PortfolioPage } from './components';
import { AndMore } from './components/and-more';
import { HeroContent } from './components/hero-content';

const AndMoreWrapper = styled.div`
    padding: 15px;
    
    display: flex;
    flex-direction: column;
    
    h2 {
        font-size: 32px;
    }

    & > p {
        margin-bottom: 10px;
    }

    .additional-projects {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;

        max-width: 1920px;
        margin: 0px auto;

        @media (max-width: ${maxLaptopBreakpoint}px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: ${maxPhoneBreakpoint}px) {
            grid-template-columns: 1fr;
        }
    }
`;

export function Home() {
    return (
        <React.Fragment>
            <HeroContent />

            {PortfolioPages.map((page, index) => 
                <PortfolioPage key={index} {...page} />
            )}

            <AndMoreWrapper>
                <h2>And More!</h2>

                <div className='additional-projects'>
                    {PortfolioAndMore.map((project, index) =>
                        <AndMore key={index} {...project} />
                    )}
                </div>
            </AndMoreWrapper>
        </React.Fragment>
    );
}
