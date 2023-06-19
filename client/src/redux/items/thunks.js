import { createAsyncThunk } from "@reduxjs/toolkit";
import ItemService from './service';

export const getItemsAsync = createAsyncThunk(
    'GET_ITEMS',
    async () => {
        return await ItemService.getItems();
    }
);

export const addItemAsync = createAsyncThunk(
    'ADD_ITEM',
    async (item) => {
      return await ItemService.addItem(item.name, item.description, item.price, item.imageUrl);
    }
);