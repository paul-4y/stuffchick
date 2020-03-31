import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => (width ? width : '100%')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    background: none;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : 'black')};
    padding: 15px 15px;
    border: none;
    border-radius: 0;
    border: 2px solid ${({ bgColor }) => (bgColor ? bgColor : 'black')};
    box-sizing: border-box;
    color: white;
    font-size: 18px;
    appearance: none;
    transition: all 200ms ease;
    outline: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
        color: ${({ bgColor }) => (bgColor ? bgColor : 'black')};
        background-color: transparent;
    }

    ${({ invert }) =>
        invert &&
        css`
            color: black;
            background-color: transparent;

            &:hover {
                color: white;
                background-color: black;
            }
        `}
`;
