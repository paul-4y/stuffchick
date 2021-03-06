import React from 'react';
import { connect } from 'react-redux';

import logo from 'common/assets/logo.png';
import APP_ROUTES from 'core/routes/constants';
import Cart from 'features/Cart';
import { auth } from 'firebase/firebase.utils';

import { ButtonAsLink, LinksWrapper, StyledHeader, StyledLink } from './style.module';

const Header = ({ currentUser }) => (
    <StyledHeader>
        <StyledLink to="/">
            <img src={logo} alt="logo" />
        </StyledLink>
        <LinksWrapper>
            <StyledLink to={APP_ROUTES.SHOP}>SHOP</StyledLink>
            {currentUser ? (
                <ButtonAsLink onClick={() => auth.signOut()}>
                    {currentUser.providerData && currentUser.providerData[0].photoURL && (
                        <img
                            src={currentUser.providerData[0].photoURL}
                            alt="user-photo"
                            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px' }}
                        />
                    )}
                    {currentUser.displayName} SIGN OUT
                </ButtonAsLink>
            ) : (
                <StyledLink to={APP_ROUTES.AUTH}>SIGN IN</StyledLink>
            )}
            <Cart />
        </LinksWrapper>
    </StyledHeader>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, null)(Header);
