import { useState } from 'react';
import {
    PortfolioContainer,
    PortfolioNav,
    NavItem,
    PortfolioBody
} from './elements';
import { WebProjects } from './web-projects';

export type PortfolioPage = "web" | "desktop" | "other" | "lab";
export interface PortfolioProps extends React.HTMLProps<HTMLDivElement> {}


export function Portfolio({...props}: PortfolioProps) {
    const [currentPage, setCurrentPage] = useState<PortfolioPage>("web");

    return (
        <PortfolioContainer>
            <PortfolioNav>
                <NavItem onClick={() => setCurrentPage("web")} active={currentPage === "web"}>Web Projects</NavItem>
                <NavItem onClick={() => setCurrentPage("desktop")}  active={currentPage === "desktop"}>Desktop Projects</NavItem>
                <NavItem onClick={() => setCurrentPage("other")}  active={currentPage === "other"}>Other Projects</NavItem>
                <NavItem onClick={() => setCurrentPage("lab")}  active={currentPage === "lab"}>The Lab</NavItem>
            </PortfolioNav>
            <PortfolioBody>
                <WebProjects />
            </PortfolioBody>
        </PortfolioContainer>
    );
}