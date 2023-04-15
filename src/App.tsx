// Initialize firebase stuff.
import './services/firebase';

import { Home } from "./pages/home";

import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { headerHeight, maxPhoneBreakpoint, portfolioBackground, systemFont, text } from './theme';
import { PortfolioLogo } from './assets';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: calc(100svh - ${headerHeight}px);

    background-color: ${portfolioBackground};
    color: ${text};
    border-color: ${text};

    nav {
        position: sticky;
        top: 0px;
        height: ${headerHeight}px;
        width: 100%;
        z-index: 100;

        background-color: ${portfolioBackground};
    
        display: grid;
        grid-template-columns: 50px minmax(0px, 1fr);
        align-items: center;
        justify-content: space-between;

        svg {
            margin: 0px 0px 0px 30px;
            width: 50px;
            height 75px;

            @media (max-width: ${maxPhoneBreakpoint}px) {
                width: 30px;
                height: 45px;
            }
        }

        .links {
            margin: 0px 30px 0px 0px;
            width: min(100%, 600px);
            height: 100%;
            justify-self: end;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: end;

            gap: 85px;
            padding-right: 170px;

            @media (max-width: ${maxPhoneBreakpoint}px) {
                gap: 15px;
                padding-right: 0px;
            }
        }

        a {
            position: relative;

            font-family: ${systemFont};
            font-weight: 500;
            font-size: 19px;
            line-height: 36px;
            color: ${text};
            text-decoration: none;
        
            opacity: 0.5;
            cursor: pointer;
    
            transition: opacity 250ms;
    
            :hover {
                opacity: 1;
            }

            :after {
                content: '';
                position: absolute;
                left: 0px;
                bottom: 0px;
                width: 100%;
                height: 3px;
        
                background-color: ${text};
        
                transition: transform 250ms;
                transform: scaleX(0);
            }
        
            &.selected::after {
                transform: scaleX(1);
            }

            &.selected {
                opacity: 1;
                cursor: default;
            }
        
            @media (max-width: 385px) {
                font-size: 16px;
            }
        }
    }
`;

function NavigationBar() {
    const location = useLocation();

    return (
        <nav>
            <PortfolioLogo />
            <div className='links'>
                <Link
                    to="/"
                    className={`link ${location.pathname === "/" ? 'selected' : ''}`}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className={`link ${location.pathname === "/about" ? 'selected' : ''}`}
                >
                    About Me
                </Link>
                <Link
                    to="/contact"
                    className={`link ${location.pathname === "/contact" ? 'selected' : ''}`}
                >
                    Contact
                </Link>
            </div>
            {/* <select className='mobile-links' value={location.pathname}>
                <option value="/">Home</option>
                <option value="/about">About Me</option>
                <option value="/contact">Contact</option>
            </select> */}
        </nav>
    )
}

export function App() {
    return (
        <Wrapper>
            <NavigationBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Wrapper>
    );
}
