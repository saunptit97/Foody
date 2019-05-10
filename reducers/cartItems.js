import {combineReducers } from 'redux';
const cart = (state = [], action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state , action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter(cartItem  => cartItem.key !== action.payload.key);
        case 'REMOVE_ALL':
            return [];
    }
    return state;
}
const language = (state = 'vi', action)=>{
    switch(action.type){
        case 'CHANGE_LANGUAGE':
            return action.text;
    }
    return state;
}
const currency = (state = 'vnd', action)=>{
    switch(action.type){
        case 'CHANGE_CURRENCY':
            return action.text;
    }
    return state; 
}
const theme = (state = '#d50000', action) =>{
    switch(action.type){
        case'CHANG_THEME':
            return action.text;
    }
    return state;
}
export default combineReducers({
    cartItems : cart,
    language: language,
    currency: currency,
    theme: theme
});