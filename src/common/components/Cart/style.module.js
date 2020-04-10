import styled, { css } from 'styled-components';

export const StyledButton = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 10px 15px;
    transition: all 200ms ease;

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const Counter = styled.div`
    position: absolute;
    top: 26px;
    left: 50%;
    box-sizing: border-box;
    font-size: 14px;
    transition: all 200ms ease;

    span {
        display: block;
        margin-left: -50%;
        background-color: white;
    }
`;
