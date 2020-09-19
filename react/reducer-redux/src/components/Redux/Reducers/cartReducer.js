import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartActions";
import fakeData from './../../../fakeData/index';

const initialState = {
    cart: [],
    products: fakeData,
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.log(action);
            const newItem = {
                productKey: action.key,
                name: action.name,
                cartId: state.cart.length + 1,
            }
            const newCart = [...state.cart, newItem];
            return {products: state.products, cart: newCart}
        case REMOVE_FROM_CART:
            const key = action.key;
            const remeaingCart = state.cart.filter(item => item.cartId !== key);
            return {...state, cart: remeaingCart}
        default:
            return state;
    }
}

export default cartReducers;