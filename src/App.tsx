// Initialize firebase stuff.
import './services/firebase';

import { Home } from "./pages/home";

import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { blackText, headerHeight, systemFont } from './theme';
import { PortfolioLogo } from './assets';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: calc(100svh - ${headerHeight}px);

    background-color: white;
    color: #333333;
    border-color: #333333;

    nav {
        position: sticky;
        top: 0px;
        height: ${headerHeight}px;
        width: 100%;
        z-index: 1;

        background-color: white;
    
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        svg {
            margin: 0px 0px 0px 30px;
        }

        .links {
            margin: 0px 30px 0px 0px;
            width: 33%;
            height: 100%;
        
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
        }

        a {
            position: relative;

            font-family: ${systemFont};
            font-weight: 500;
            font-size: 19px;
            line-height: 36px;
            color: ${blackText};
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
        
                background-color: ${blackText};
        
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
            <PortfolioLogo primaryColor={'#ffffff'} width={50} height={75} />
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
