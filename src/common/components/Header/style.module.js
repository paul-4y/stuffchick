import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

export const LinksWrapper = styled.div`
    display: flex;
`;

export const StyledLink = styled(Link)`
    display: flex;
    padding: 10px 15px;
    align-items: center;
    font-size: 18px;
`;
