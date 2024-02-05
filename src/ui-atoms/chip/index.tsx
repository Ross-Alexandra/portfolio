import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    padding: 5px 10px;
    margin: 5px;

    background-color: #00000020;
    text-transform: capitalize;
    font-weight: 700;

    border: 1px solid #00000080;
    border-radius: 500px;
`;

type ChipProps = Omit<React.HTMLProps<HTMLDivElement>, 'as'>

export const Chip: React.FC<ChipProps> = ({
    children,
    ...props
}) => {
    return (
        <Wrapper {...props}>
            {children}
        </Wrapper>
    );
};
