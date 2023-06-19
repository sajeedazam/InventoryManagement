import { createSlice } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
import { getItemsAsync, addItemAsync, deleteItemAsync, editItemAsync } from './thunks';

// cs455-express-demo
const REQUEST_STATE = {
    IDLE: 'IDLE',
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED'
};

const INITIAL_STATE = {
    items: [],
    getItems: REQUEST_STATE.IDLE,
    addItem: REQUEST_STATE.IDLE,
    deleteItem: REQUEST_STATE.IDLE,
    editItem: REQUEST_STATE.IDLE,
    error: null
};

const itemSlice = createSlice({
    name: 'items',
    initialState: INITIAL_STATE,
    reducers: {
        // addItem: (state, action) => {
        //     const newItem = { id: uuidv4(), ...action.payload };
        //     state.items.push(newItem);
        // },
        // deleteItem: (state, action) => {
        //     const itemId = action.payload.id;
        //     state.items = state.items.filter(item => item.id !== itemId);
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getItemsAsync.pending, (state) => {
                state.getItems = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getItemsAsync.fulfilled, (state, action) => {
                state.getItems = REQUEST_STATE.FULFILLED;
                state.items = action.payload
            })
            .addCase(getItemsAsync.rejected, (state, action) => {
                state.getItems = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(addItemAsync.pending, (state) => {
                state.addItem = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addItemAsync.fulfilled, (state, action) => {
                state.addItem = REQUEST_STATE.FULFILLED;
                state.items.push(action.payload);
            })
            .addCase(addItemAsync.rejected, (state, action) => {
                state.addItem = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(deleteItemAsync.pending, (state) => {
                state.deleteItem = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteItemAsync.fulfilled, (state, action) => {
                state.deleteItem = REQUEST_STATE.FULFILLED;
                const itemId = action.payload.id;
                state.items = state.items.filter((item) => item.id !== itemId);
            })
            .addCase(deleteItemAsync.rejected, (state, action) => {
                state.deleteItem = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(editItemAsync.pending, (state) => {
                state.editItem = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(editItemAsync.fulfilled, (state, action) => {
                state.editItem = REQUEST_STATE.FULFILLED;
                const updatedItem = action.payload;
                const index = state.items.findIndex(item => item.id === updatedItem.id);
                if (index !== -1) {
                    state.items[index].description = updatedItem.description;
                }
            })
            .addCase(editItemAsync.rejected, (state, action) => {
                state.editItem = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});


// export const { addItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;