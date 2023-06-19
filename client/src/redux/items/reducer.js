import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { getItemsAsync } from './thunks';


const INITIAL_STATE = {
    items: [],
};

const itemSlice = createSlice({
  name: 'items',
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
        const newItem = { id: uuidv4(), ...action.payload };
        state.items.push(newItem);
    },
    deleteItem: (state, action) => {
        const itemId = action.payload.id;
        state.items = state.items.filter(item => item.id !== itemId);
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(getItemsAsync.fulfilled, (state, action) => {
            state.items = action.payload
        })
  }
});


export const { addItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;