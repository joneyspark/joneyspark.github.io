import {createStore} from 'redux';
import cartReducers from '../Reducers/cartReducer';

export const store = createStore(cartReducers);