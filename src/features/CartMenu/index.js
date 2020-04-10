import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from 'common/components/Button';
import { selectCartItems } from 'core/store/cart/cart.selectors';

import { Footer, ImageWrapper, ItemWrapper, List, Wrapper } from './style.module';

const CartMenu = ({ cartItems }) => {
    // const handleChange = (field, value) => {
    //     (prevState) => ({
    //         ...prevState,
    //         [field]: value,
    //     });
    // };

    return (
        <Wrapper>
            <List>
                {cartItems.map((item) => (
                    <ItemWrapper key={item.title}>
                        <ImageWrapper imgUrl={item.imgUrl} />
                        <div>
                            <div>{item.title}</div>
                            <div>{`${item.quantity} x $${item.price}`}</div>
                        </div>
                    </ItemWrapper>
                ))}
            </List>
            <Footer>
                <Button>Go To Checkout</Button>
            </Footer>
        </Wrapper>
    );
};

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });
// const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, null)(CartMenu);
