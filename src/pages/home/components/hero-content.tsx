import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';

import {
    HeadshotAlternate,
    HeadshotBGImage,
    HeadshotImage,
    ScrollArrow,
} from '../../../assets';
import { primaryButtonCSS } from '../../../elements';
import {
    defaultFont,
    fancyFont,
    headerHeight,
    maxDesktopBreakpoint,
    maxPhoneBreakpoint,
    maxTabletBreakpoint,
    text,
} from '../../../theme';
import { RollingText } from '../../../ui-atoms/rolling-text';
import { SlideIn } from '../../../ui-atoms/slide-in';

const heroText = [
    'Ross Alexandra',
    'A Developer',
    'A Maker',
    'A Coach',
    'A Nerd',
];

const Wrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: ${headerHeight}px;
    scroll-margin-top: ${headerHeight}px;

    width: 100%;
    height: calc(100svh - ${headerHeight}px);
    padding: 0px 15px 0px 15px;

    @media (max-width: ${maxPhoneBreakpoint}px) {
        padding: 0px 5px 0px 5px;
        gap: 15px;

        justify-content: center;
    }

    a {
        text-decoration: none;
        ${primaryButtonCSS}
    }

    .button-slide-in {
        width: max-content;

        div {
            display: grid;
            place-items: center;
            grid-template-columns: 1fr 1fr;
            gap: 5px 15px;
        
            @media (max-width: ${maxPhoneBreakpoint}px) {
                grid-template-columns: 1fr;
            }

            a {
                position: relative;
                width: 100%;
            }

            span {
                width: 100%;

                text-align: center;
                font-size: 12px;
                color: ${text}40;
            }
        }
    }

    .headshot {
        position: absolute;
        top: 125px;
        right: 0px;

        display: grid;
        place-items: center;

        padding: 100px 65px;
        box-sizing: border-box;
        background-image: url(${HeadshotBGImage});
        background-size: contain;
        background-repeat: no-repeat;

        z-index: 1;

        @media (max-width: ${maxDesktopBreakpoint}px) {
            display: none;
        }
    }

    img {
        margin: 0px auto 30px auto;

        width: 275px;
        height: 275px;
        border-radius: 50%;
        transform: rotateY(180deg);

        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    }

    .fade-over {
        position: absolute;

        opacity: 0;

        transition-property: opacity;
        transition-delay: 0s;
        transition-duration: 500ms;

        object-fit: cover;

        :hover {
            opacity: 1;
            transition-duration: 2s;
            transition-delay: 1s;
        }
    }

    h2 {
        font-family: ${fancyFont};
        font-size: 140px;
    
        user-select: none;
        cursor: default;

        @media (max-width: ${maxTabletBreakpoint}px) {
            font-size: 80px;
        }

        @media (max-width: ${maxPhoneBreakpoint}px) {
            font-size: 42px;
        }
    }

    .rolling-text {
        text-align: center;
        width: 100%;
    }

    .quote-box {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    
        width: fit-content;
        border-left: 5px solid;
        
        /* Right padding of 30px to overcome the
        padding of the quote-box by 15px */
        padding-inline: 15px 30px;
    
        font-family: ${defaultFont};
        font-size: 18px;
        
        opacity: 0.75;
    
        .author {
            margin-top: 10px;
            text-align: right;
        }
    
        @media (max-width: ${maxTabletBreakpoint}px) {
            font-size: 14px;
        }
    
        quotes: "“" "”";
        ::before {
            content: open-quote;
            font-size: 80px;
    
            height: 45px; // This is a hack to make the quote sign appear above the text

            @media (max-width: ${maxTabletBreakpoint}px) {
                font-size: 50px;
                height: 30px;
            }
        }
    }

    .scroll-arrow {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        flex-direction: column;
        align-items: center;

        opacity: 0.5;

        cursor: pointer;

        /* 
            This is to hide the scroll arrow on mobile devices
            which have a height of 730px or less. This is because
            the scroll arrow would conflict with the content
            of the hero section.
        */
        @media (max-height: 730px) {
            display: none;
        }
    }
`;

export function HeroContent() {
    return (
        <Wrapper>
            <div className='headshot'>
                <img src={HeadshotImage} alt="Portrait"/>
                <img src={HeadshotAlternate} className='fade-over' alt='Portrait' />
            </div>

            <SlideIn noRepeatId='hello' direction="bottom">
                <h2 className='hello-text'>Hi, I&apos;m</h2>
            </SlideIn>

            <SlideIn className='rolling-text' noRepeatId='roller' direction="top" delay={750}>
                <RollingText textDuration={2000} initialDelay={250}>
                    {heroText.map(text => 
                        <h2 key={text}>{text}</h2>
                    )}
                </RollingText>
            </SlideIn>

            <SlideIn direction="bottom" noRepeatId='quote' delay={1500}>
                <div className='quote-box'>
                    <p className='quote'>Pushing the limit of what you think is possible is the best way to make the impossible possible.</p>
                    <br/>
                    <p className='author'>~ Someone, Probably</p>
                </div>
            </SlideIn>

            <SlideIn className='button-slide-in' direction='bottom' noRepeatId='view-work-button' delay={1500}>
                <HashLink to='/experience'>View My Work</HashLink>
                <HashLink to='/Resume.pdf' target='_blank' rel='noreferrer'>View My Resume</HashLink>
                <span />
                <span>Updated: April 19th, 2023</span>
            </SlideIn>

            <div 
                className='scroll-arrow'
                onClick={() => {
                    document.querySelector('.portfolio-page')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <p>See Portfolio</p>
                <ScrollArrow height={25} />
            </div>
        </Wrapper>
    );
}
