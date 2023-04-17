import styled from '@emotion/styled';

import { PortfolioAndMore } from '../../app-data/portfolio-and-more';
import { PortfolioPages } from '../../app-data/portfolio-items';

import { PortfolioPage } from './components';
import { AndMore } from './components/and-more';
import { HeroContent } from './components/hero-content';

const Wrapper = styled.div`
    #and-more {
        padding: 15px;
        
        h2 {
            font-size: 32px;
        }

        & > p {
            margin-bottom: 10px;
        }
    }

    .additional-projects {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }
`;

export function Home() {
    return (
        <Wrapper>
            <HeroContent />

            {PortfolioPages.map((page, index) => 
                <PortfolioPage key={index} {...page} />
            )}

            <div id='and-more'>
                <h2>And More!</h2>

                <div className='additional-projects'>
                    {PortfolioAndMore.map((project, index) =>
                        <AndMore key={index} {...project} />
                    )}
                </div>
            </div>
        </Wrapper>
    );
}
