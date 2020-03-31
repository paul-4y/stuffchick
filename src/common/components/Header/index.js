import React from 'react';

import logo from 'common/assets/logo.png';
import APP_ROUTES from 'core/routes/constants';

import { LinksWrapper, StyledHeader, StyledLink } from './style.module';

const Header = () => (
    <StyledHeader>
        <StyledLink to="/">
            <img src={logo} alt="logo" />
        </StyledLink>
        <LinksWrapper>
            <StyledLink to={APP_ROUTES.SHOP}>SHOP</StyledLink>
            <StyledLink to={APP_ROUTES.AUTH}>SIGN IN</StyledLink>
        </LinksWrapper>
    </StyledHeader>
);

export default Header;
