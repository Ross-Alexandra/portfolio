import {HeadshotImage} from '../../assets';
import { SlideIn } from "../../ui-atoms/slide-in";
import { RollingText } from "../../ui-atoms/rolling-text";
import styled from "@emotion/styled";
import { defaultFont, fancyFont, headerHeight } from "../../theme";

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

    height: calc(100svh - ${headerHeight}px);

    img {
        margin: 0px auto 30px auto;

        width: 175px;
        height: 175px;
        border-radius: 50%;
        transform: rotateY(180deg);
    }

    h2 {
        font-family: ${fancyFont};
        font-size: 140px;
        line-height: 120px;
    
        user-select: none;
        cursor: default;
    }

    .quote-box {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    
        width: fit-content;
        padding-inline: 15px;
        border-left: 5px solid;
    
        font-family: ${defaultFont};
        font-size: 18px;
        
        opacity: 0.75;
    
        .author {
            margin-top: 10px;
            text-align: right;
        }
    
        @media (max-width: 850px) {
            font-size: 14px;
        }
    
        quotes: "“" "”";
        ::before {
            content: open-quote;
            font-size: 80px;
    
            height: 45px; // This is a hack to make the quote sign appear above the text
        }
    }
`;

export function HeroContent() {
    return (
        <Wrapper>
            <img src={HeadshotImage} alt="Portrait"/>
            <SlideIn direction="bottom">
                <h2 className='hello-text'>Hi, I'm</h2>
            </SlideIn>

            <SlideIn direction="top" delay={750}>
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