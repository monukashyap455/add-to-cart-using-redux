import { ADD_TO_CART, REMOVE_TO_CART } from './../constant';

export const ADD = (items) => {
    return {
        type: ADD_TO_CART,
        payload: items,
    }
};

export const REMOVE = (items) => {
    // console.log(items);
    return {
        type: REMOVE_TO_CART,
        payload: items,
    }
};

