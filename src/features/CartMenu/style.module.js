import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    top: calc(100% + 30px);
    right: -15px;
    width: 300px;
    max-height: 440px;
    padding: 10px;
    border: 2px solid black;
    background-color: white;
    z-index: 100;
    box-sizing: border-box;
`;

export const List = styled.div`
    width: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    margin-bottom: 10px;
    max-height: 350px;
`;

export const Footer = styled.div`
    width: 100%;
`;

export const ItemWrapper = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    font-size: 16px;
    color: darkgray;
`;

export const ImageWrapper = styled.div`
    margin-right: 20px;
    width: 90px;
    height: 140px;
    background-image: ${(props) => `url(${props.imgUrl})`};
    background-size: cover;
    background-position: center;
`;
