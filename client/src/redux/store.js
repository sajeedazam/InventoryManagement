import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './items/reducer';

export const store = configureStore({
    reducer: { items: itemReducer },
    devTools: true
});
