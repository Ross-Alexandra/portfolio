// Initialize firebase stuff.
import './services/firebase';

import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import {
    Routes,
    Route,
    useLocation,
    Link,
    Navigate,
} from 'react-router-dom';

import {
    GithubLogo,
    LinkedInLogo,
    PortfolioLogo,
    UpChevron,
} from './assets';
import { primaryButtonCSS } from './elements';
import { Contact } from './pages/contact';
import { Experience } from './pages/experience';
import { Home } from './pages/home';
import {
    headerHeight,
    maxPhoneBreakpoint,
    portfolioBackground,
    systemFont,
    text,
} from './theme';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100svh;

    overflow: auto;
    scroll-snap-type: y mandatory;
    & > *:not(nav):not(svg) {
        scroll-snap-align: start;
    }

    background-color: ${portfolioBackground};
    color: ${text};
    border-color: ${text};

    nav {
        position: fixed;
        top: 0px;
        height: ${headerHeight}px;
        width: 100%;
        z-index: 100;

        transition: transform 250ms;
        &[data-visible='false'] {
            transform: translateY(-100%);
        }

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

    .scroll-to-top-button {
        position: fixed;
        bottom: 20px;
        z-index: 100;

        margin: 0px 20px 0px calc(100vw - 55px);
        cursor: pointer;

        visibility: hidden;
        opacity: 0;
        transition: visibility 250ms, opacity 250ms linear;

        &.visible {
            visibility: visible;
            opacity: 1;

            transition: visibility 0ms, opacity 250ms linear;
        }
    }

    footer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;

        width: 100%;

        margin-top: 20px;
        padding: 20px 50px;

        background-color: rgba(0, 0, 0, 0.5);

        @media (max-width: ${maxPhoneBreakpoint}px) {
            display: flex;
            flex-direction: column-reverse;

            gap: 10px;
        }

        p {
            font-family: ${systemFont};
            font-size: 15px;

            color: ${text};
        }

        .internal-links {
            display: flex;
            flex-direction: row;
            width: 100%;
            gap: 25px;

            justify-content: start;

            @media (max-width: ${maxPhoneBreakpoint}px) {
                justify-content: center;
            }
        }

        .external-links {
            display: flex;
            flex-direction: row;
            width: 100%;
            gap: 25px;

            justify-content: end;

            @media (max-width: ${maxPhoneBreakpoint}px) {
                justify-content: center;
            }
        }

        a {
            ${primaryButtonCSS}
            background-color: transparent;
            padding: 0px;
        }
    }
`;

function NavigationBar() {
    const location = useLocation();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', e => {
            const target = e.target as HTMLElement;

            if (target.scrollTop > 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        }, true);
    }, []);

    return (
        <nav data-visible={visible}>
            <PortfolioLogo />
            <div className='links'>
                <Link
                    to="/"
                    className={`link ${location.pathname === '/' ? 'selected' : ''}`}
                >
                    Home
                </Link>
                <Link
                    to="/experience"
                    className={`link ${location.pathname === '/experience' ? 'selected' : ''}`}
                >
                    Experience
                </Link>
                <Link
                    to="/contact"
                    className={`link ${location.pathname === '/contact' ? 'selected' : ''}`}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}

export function Footer() {
    return (
        <footer>
            <div className='internal-links'>
                <PortfolioLogo width={50} height={50} />
            </div>
            <p>&copy; {new Date().getFullYear()} Ross Alexandra </p>
            <div className='external-links'>
                <a href='https://github.com/Ross-Alexandra' target='_blank' rel='noopener noreferrer'>
                    <GithubLogo width={35} height={35} />
                </a>
                <a href='https://www.linkedin.com/in/ross-alexandra-5201ab149/' target='_blank' rel='noopener noreferrer'>
                    <LinkedInLogo width={35} height={35} />
                </a>
            </div>
        </footer>
    );
}

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollTarget, setScrollTarget] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            const target = e.target as HTMLElement;
            setScrollTarget(target);
            if (target.scrollTop >= window.innerHeight - headerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setIsVisible]);

    return (
        <UpChevron 
            width={25}
            height={25}
            className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={() => scrollTarget?.scrollTo(0, 0)}
        />
    );
}

export function App() {
    return (
        <Wrapper>
            <NavigationBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>

            <ScrollToTopButton />

            <Footer />
        </Wrapper>
    );
}
