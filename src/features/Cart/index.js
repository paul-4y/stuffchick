import React, { useState } from 'react';
import { connect } from 'react-redux';

import Bag from 'common/components/Cart';
import CartMenu from 'features/CartMenu';

const Cart = ({ cartItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const triggerOpenMenu = () => {
        console.log('Cart -> prevState');

        setIsOpen((prevState) => !prevState);
    };

    const itemsCounter = cartItems.reduce((accamulate, cartItem) => accamulate + cartItem.quantity, 0);

    return (
        <Bag handleClick={triggerOpenMenu}>
            {itemsCounter}
            {isOpen && <CartMenu />}
        </Bag>
    );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });
// const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, null)(Cart);
