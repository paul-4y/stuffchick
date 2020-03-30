import React from 'react';

import Header from 'common/components/Header';

import { StyledLayout } from './style.module';

const Layout = (props) => (
    <StyledLayout>
        <Header />
        {props.children}
    </StyledLayout>
);

export default Layout;
