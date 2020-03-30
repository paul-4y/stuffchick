import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const InnerElement = styled.div`
    width: 80px;
    height: 60px;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    transition: all 200ms ease;

    h3,
    h4 {
        padding: 0;
        margin: 0;
        text-align: center;
    }
    h3 {
        padding-bottom: 5px;
    }
`;

export const ImageWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.imgUrl})`};
    background-size: cover;
    background-position: center;
    transition: all 200ms ease;
`;

export const ElementWrapper = styled(Link)`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 340px;
    height: 300px;
    margin: 5px;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;

    &:nth-last-child(-n + 2) {
        width: calc(50% - 10px);
        max-width: unset;
        height: 400px;
    }

    &:hover {
        ${InnerElement} {
            opacity: 0.9;
        }
        ${ImageWrapper} {
            width: 115%;
            height: 115%;
        }
    }
`;
