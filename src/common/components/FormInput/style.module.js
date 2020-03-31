import styled, { css } from 'styled-components';

const labelStyles = css`
    top: -10px;
    font-size: 12px;
    color: darkgray;
`;

export const Label = styled.label`
    display: flex;
    position: absolute;
    pointer-events: none;
    font-size: 16px;
    top: 5px;
    left: 15px;
    transition: all 200ms ease;

    ${(props) => props.isTop && labelStyles}
`;

export const StyledInput = styled.input`
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

        + ${Label} {
            color: red;
            ${labelStyles}
        }
    }
`;

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 0;
    font-size: 18px;
    margin: 20px 0;
    box-sizing: border-box;
`;
