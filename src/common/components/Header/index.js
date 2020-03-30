import React from 'react';

import APP_ROUTES from 'core/routes/constants';

import { LinksWrapper, StyledHeader, StyledLink } from './style.module';

const Header = () => (
    <StyledHeader>
        <LinksWrapper>
            <StyledLink to={APP_ROUTES.SHOP}>SHOP</StyledLink>
        </LinksWrapper>
    </StyledHeader>
);

export default Header;
