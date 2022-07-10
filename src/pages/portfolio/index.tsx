import { useEffect, useState } from 'react';
import { IAppSection } from '../../global-interfaces';
import { DesktopProjects } from './desktop-projects';
import {
    PortfolioContainer,
    PortfolioNav,
    NavItem,
    PortfolioBody
} from './elements';
import { OtherProjects } from './other-projects';
import { TheLab } from './the-lab';
import { WebProjects } from './web-projects';

export type PortfolioPage = "web" | "desktop" | "other" | "lab";
export interface PortfolioProps extends React.HTMLProps<HTMLDivElement> {
    setTopLevelPage: (newSection: IAppSection) => void;
}

function getPageIndex(page: PortfolioPage): number {
    switch(page) {
        case "web":
            return 0;
        case "desktop":
            return 1;
        case "other":
            return 2;
        case "lab":
            return 3;
    }
}

export function Portfolio({setTopLevelPage}: PortfolioProps) {
    const [currentPage, setCurrentPage] = useState<PortfolioPage>("web");
    const [bodyHeight, setBodyHeight] = useState(document.getElementById(`${currentPage}-projects`)?.getBoundingClientRect().height);
    const pageIndex = getPageIndex(currentPage);
    
    useEffect(() => {
        setTimeout(() => {
            setBodyHeight(document.getElementById(`${currentPage}-projects`)?.getBoundingClientRect().height);
        }, 350); //50ms grace period.
    }, [currentPage]);

    return (
        <PortfolioContainer>
            <PortfolioNav>
                <NavItem onClick={() => setCurrentPage("web")} active={currentPage === "web"}>Web Apps</NavItem>
                <NavItem onClick={() => setCurrentPage("desktop")}  active={currentPage === "desktop"}>Desktop Apps</NavItem>
                <NavItem onClick={() => setCurrentPage("other")}  active={currentPage === "other"}>Other Projects</NavItem>
                <NavItem onClick={() => setCurrentPage("lab")}  active={currentPage === "lab"}>The Lab</NavItem>
            </PortfolioNav>
            <PortfolioBody pageIndex={pageIndex} bodyHeight={bodyHeight}>
                <WebProjects setTopLevelPage={setTopLevelPage} active={currentPage === "web"}/>
                <DesktopProjects setTopLevelPage={setTopLevelPage} active={currentPage === "desktop"}/>
                <OtherProjects setTopLevelPage={setTopLevelPage} active={currentPage === "other"}/>
                <TheLab setTopLevelPage={setTopLevelPage} active={currentPage === "lab"}/>
            </PortfolioBody>
        </PortfolioContainer>
    );
}