import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
    items: [
        { id: 1, name: 'Hammer', description: 'Steel head and wooden handle hammer', price: 15, imageUrl: "https://th.bing.com/th/id/R.08d4c4232ad5c3b152835810d8339de9?rik=wAKL6zkubUbHMg&pid=ImgRaw&r=0" },
        { id: 2, name: 'Pliers', description: 'For gripping objects', price: 15, imageUrl: 'https://cdn4.iconfinder.com/data/icons/construction-and-building-1/128/13-1024.png' },
    ],
};

const itemReducer = createSlice({
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
});


export const { addItem, deleteItem } = itemReducer.actions;
export default itemReducer.reducer;