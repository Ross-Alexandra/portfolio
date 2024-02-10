import styled from '@emotion/styled';
import React from 'react';

import { LeftChevron, RightChevron } from '../../assets';

const Wrapper = styled.div<{
    currentIndex: number;
    totalImages: number;
}>`
    position: relative;
    overflow: hidden;

    .hidden-sizer {
        visibility: hidden;

        width: 100%;
    }

    .carousel {
        position: absolute;
        top: 0px;

        /* 25px buttons + 10px gap */
        left: 35px;

        /* (25px buttons + 10px gap) * 2 */
        width: calc(100% - 70px);

        display: grid;

        /* 
            This is the magic that makes the carousel work

            The grid-template-columns property is a list of values
            that define the width of each column in the grid. 
            
            - The first {currentIndex} columns are 0px wide as they
            are hidden (if the carousel is showing the 2nd image,
            the first column is hidden, index === 1). 
            - The next column is 1fr wide, which means it will take
            up the remaining space in the grid.
            - The last {totalImages - currentIndex} columns are 0px
            wide as they are hidden (if the carousel is showing the
            2nd of 3 images, the last 1 column is hidden, 
            3 (total) - 1 (index) - 1 === 1).
        */
        grid-template-columns: ${({ currentIndex, totalImages }) => `
            ${'0px '.repeat(currentIndex)}
            100%
            ${'0px '.repeat(totalImages - currentIndex - 1)}
        `};

        transition: grid-template-columns 0.5s ease-in-out;

        img {
            width: 100%;
        }
    }

    .carousel-control-row {
        display: flex;
        flex-direction: row;
        
        gap: 10px;

        button {
            appearance: none;
            outline: transparent;
            border: none;

            padding: 0px;

            background-color: transparent;
            cursor: pointer;
        }
    }

    .carousel-control {
        visibility: ${({ totalImages }) => totalImages === 1 && 'hidden'};
    }

    .carousel-dots {
        display: ${({ totalImages }) => totalImages === 1 ? 'none' : 'flex'};

        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        margin-top: 10px;

        gap: 10px;

        button {
            appearance: none;
            outline: transparent;
            border: none;

            padding: 7px;
            border-radius: 50%;

            opacity: 0.5;

            cursor: pointer;
        }

        button.active {
            opacity: 1;
        }
    }
`;

type CarouselProps = Omit<React.HTMLProps<HTMLDivElement>, 'as'> & {
    images: string[];
    currentIndex: number;
    onSetIndex: (index: number) => void;
    onClickActiveImage?: (clickedImage: string) => void;
}

/**
 *  Carousel rewrite to support the idea of events bubbling up &
 *  state bubbling down to be managed by the parent component.
 * 
 *  The component *does not* control it's own state, and instead
 *  renders based on the props it receives.
 */
export const Carousel: React.FC<CarouselProps> = ({
    images,
    currentIndex,
    onSetIndex,
    onClickActiveImage,
    ...props
}) => {
    const currentImage = React.useMemo(() => images[currentIndex], [currentIndex, images]);

    return (
        <Wrapper 
            currentIndex={currentIndex}
            totalImages={images.length}
            {...props}
        >

            <div className='carousel-control-row'>

                <button
                    className='carousel-control carousel-prev'
                    onClick={() => onSetIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
                >
                    <LeftChevron width={25} height={25}/>
                </button>

                <img
                    src={currentImage}
                    className='hidden-sizer'
                    alt='Current'
                />

                <button
                    className='carousel-control carousel-next'
                    onClick={() => onSetIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
                >
                    <RightChevron width={25} height={25}/>
                </button>
            </div>

            <div className='carousel'>
                {images.map((image, index) => 
                    <img 
                        key={index}
                        src={image}
                        className={`carousel-image ${index === currentIndex ? 'focused' : ''}`}
                        alt={`Carousel ${index}`}
                        onClick={() => onClickActiveImage?.(image)}
                    />
                )}
            </div>

            <div className='carousel-dots'>
                {images.map((_, index) => 
                    <button
                        key={index}
                        className={`carousel-control carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => onSetIndex(index)}
                    />
                )}
            </div>
        </Wrapper>
    );
};
