import {combineReducers } from 'redux';
const cart = (state = [], action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state , action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter(cartItem  => cartItem.key !== action.payload.key)
    }
    return state;
}
const language = (state = 'vi', action)=>{
    switch(action.type){
        case 'CHANGE_LANGUAGE':
            return action.text;
            // return [...state, action.payload];
    }
    return state;
}
export default combineReducers({
    cartItems : cart,
    language: language
});