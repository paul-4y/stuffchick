import React, { useState } from 'react';
import { connect } from 'react-redux';

import Bag from 'common/components/Cart';
import { selectCartItemsCount } from 'core/store/cart/cart.selectors';
import CartMenu from 'features/CartMenu';

const Cart = ({ itemsCounter }) => {
    const [isOpen, setIsOpen] = useState(false);

    const triggerOpenMenu = () => {
        console.log('Cart -> prevState');

        setIsOpen((prevState) => !prevState);
    };

    return (
        <Bag handleClick={triggerOpenMenu}>
            {itemsCounter}
            {isOpen && <CartMenu />}
        </Bag>
    );
};

const mapStateToProps = (state) => ({ itemsCounter: selectCartItemsCount(state) });
// const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, null)(Cart);
