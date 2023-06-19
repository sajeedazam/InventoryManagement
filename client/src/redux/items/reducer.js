import { createSlice } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
import { getItemsAsync, addItemAsync, deleteItemAsync, editItemAsync } from './thunks';

const INITIAL_STATE = {
    items: [],
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
            .addCase(getItemsAsync.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(addItemAsync.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteItemAsync.fulfilled, (state, action) => {
                const itemId = action.payload.id;
                state.items = state.items.filter((item) => item.id !== itemId);
            })
            .addCase(editItemAsync.fulfilled, (state, action) => {
                const updatedItem = action.payload;
                const index = state.items.findIndex(item => item.id === updatedItem.id);
                if (index !== -1) {
                    state.items[index].description = updatedItem.description;
                }
            })
            .addCase(editItemAsync.rejected, (state, action) => {
                const { status, message } = action.payload;
                // Handle different error cases based on the status code
                if (status === 400) {
                    // Bad request
                    console.error('Bad request:', message);
                } else if (status === 404) {
                    // Item not found
                    console.error('Item not found:', message);
                } else {
                    // Other error cases
                    console.error('Request failed:', message);
                }
            });
    }
});


// export const { addItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;