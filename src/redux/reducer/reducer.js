import { ADD_TO_CART, REMOVE_TO_CART } from './../constant';



export const cartreducer = (state = [], action) => {
    // console.log(action)
    switch (action.type) {
        case ADD_TO_CART:
            return (
                // state
                [...state, action.payload]
            )
        case REMOVE_TO_CART:
            return (
                // state
                state = state.filter((e) => e.ProductId !== action.payload.ProductId)
            )

        default: return state
    }
};