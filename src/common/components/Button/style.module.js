import styled, { css } from 'styled-components';

const labelStyles = css`
    top: -10px;
    font-size: 12px;
    color: darkgray;
`;

export const StyledButton = styled.button`
    display: block;
    width: 100%;
    background: none;
    background-color: white;
    padding: 10px 10px 10px 15px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid black;

    &:focus {
        outline: none;
    }
`;
