import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const InnerElement = styled.div`
    display: flex;
    position: absolute;
    bottom: 70px;
    left: 10%;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 50px;
    background-color: white;
    opacity: 0.7;
    text-transform: uppercase;
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

    &:hover {
        opacity: 0.9;
        background-color: black;
        color: white;
    }
`;

export const ElementContainer = styled.div`
    width: 100%;
    max-width: 340px;
    box-sizing: border-box;
    margin: 5px 5px 20px;
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

export const ElementWrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    border: 1px solid black;
    box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        ${ImageWrapper} {
            width: 115%;
            height: 115%;
        }
    }
`;

export const InnerFooter = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    justify-content: space-between;
    padding: 5px;
    box-sizing: border-box;
`;

export const Footer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5px;
    box-sizing: border-box;
`;

export const ColorsWrapper = styled.div`
    display: flex;
`;

export const ColorChoose = styled.div`
    width: 30px;
    min-height: 30px;
    border: 1px solid black;
    margin-right: 4px;
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }
`;

export const SizesWrapper = styled(ColorsWrapper)``;

export const SizeChoose = styled(ColorChoose)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    background-color: white;
    font-weight: bold;
`;
