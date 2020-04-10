import React from 'react';

import { ReactComponent as CartIcon } from 'common/assets/shop_package.svg';

import { Counter, StyledButton } from './style.module';

const Cart = ({ children, handleClick }) => (
    <StyledButton onClick={handleClick}>
        <CartIcon />
        <Counter>
            <span>{children}</span>
        </Counter>
    </StyledButton>
);

export default Cart;
