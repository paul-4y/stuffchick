import { cartActionTypes } from './cart.actions';
import { addItemToCart } from './utils';

const INIT_STATE = {
    cartItems: [],
};

const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
