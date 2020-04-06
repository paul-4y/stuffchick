import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const linkStyles = css`
    display: flex;
    padding: 10px 15px;
    align-items: center;
    font-size: 18px;
    text-decoration: none;
`;

export const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const LinksWrapper = styled.div`
    display: flex;
`;

export const StyledLink = styled(Link)`
    ${linkStyles}
`;

export const ButtonAsLink = styled.div`
    ${linkStyles}
    cursor: pointer;
`;
