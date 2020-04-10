export const cartActionTypes = { ADD_ITEM: 'ADD_ITEM' };

export const addItem = (item) => ({ type: cartActionTypes.ADD_ITEM, payload: item });
