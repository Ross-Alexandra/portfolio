import { PortfolioPages } from '../../app-data/portfolio-items';

import { PortfolioPage } from './components';
import { HeroContent } from './hero-content';

export function Home() {
    return (
        <>
            <HeroContent />

            {PortfolioPages.map((page, index) => 
                <PortfolioPage key={index} {...page} />
            )}
        </>
    );
}
