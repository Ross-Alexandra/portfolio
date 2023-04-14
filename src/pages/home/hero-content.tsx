import {HeadshotBGImage, HeadshotImage} from '../../assets';
import { SlideIn } from "../../ui-atoms/slide-in";
import { RollingText } from "../../ui-atoms/rolling-text";
import styled from "@emotion/styled";
import { defaultFont, fancyFont, headerHeight, maxDesktopBreakpoint, maxPhoneBreakpoint, maxTabletBreakpoint } from "../../theme";

const heroText = [
    'Ross Alexandra',
    'A Developer',
    'A Maker',
    'A Coach',
    'A Nerd'
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 15px;

    width: 100%;
    height: calc(100svh - ${headerHeight}px);
    padding: 125px 15px 0px 15px;

    @media (max-width: ${maxPhoneBreakpoint}px) {
        padding: 100px 5px 0px 5px;
    }

    .headshot {
        position: absolute;
        top: 125px;
        right: 50px;

        display: grid;
        place-items: center;

        padding: 100px 65px;
        box-sizing: border-box;
        background-image: url(${HeadshotBGImage});
        background-size: cover;

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
`;

export function HeroContent() {
    return (
        <Wrapper>
            <div className='headshot'>
                <img src={HeadshotImage} alt="Portrait"/>
            </div>
            <SlideIn direction="bottom">
                <h2 className='hello-text'>Hi, I'm</h2>
            </SlideIn>

            <SlideIn className='rolling-text' direction="top" delay={750}>
                <RollingText textDuration={2000} initialDelay={250}>
                    {heroText.map((text) => 
                        <h2 key={text}>{text}</h2>
                    )}
                </RollingText>
            </SlideIn>

            <SlideIn direction="bottom" delay={1500}>
                <div className='quote-box'>
                    <p className='quote'>Pushing the limit of what you think is possible is the best way to make the impossible possible.</p>
                    <br/>
                    <p className='author'>~ Someone, Probably</p>
                </div>
            </SlideIn>
        </Wrapper>
    );
}