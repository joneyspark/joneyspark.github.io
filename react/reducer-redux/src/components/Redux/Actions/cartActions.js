export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (key, name) => {
    return { type: ADD_TO_CART, key, name }
}

export const removeFromCart = key => {
    return { type: REMOVE_FROM_CART, key }
}