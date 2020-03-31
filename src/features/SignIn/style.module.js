import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 400px;
`;

export const Footer = styled.div`
    display: flex;
    margin-top: 50px;
    width: 100%;

    div {
        width: 100%;

        &:first-child {
            margin-right: 15px;
            max-width: 40%;
        }
    }
`;
