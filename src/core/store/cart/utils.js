export const addItemToCart = (cartItems, item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.title === item.title);

    if (existingItem) {
        return cartItems.map((cartItem) => (cartItem.title === item.title ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    }

    return [...cartItems, { ...item, quantity: 1 }];
};
