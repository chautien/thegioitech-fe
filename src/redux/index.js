import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
    cart: cartReducer
})



export const store = configureStore({
    reducer: rootReducer,
});