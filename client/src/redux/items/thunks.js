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

export const deleteItemAsync = createAsyncThunk(
    'DELETE_ITEM',
    async (itemId) => {
        return await ItemService.deleteItem(itemId);
    }
);

export const editItemAsync = createAsyncThunk(
    'EDIT_ITEM',
    async ({ itemId, description }) => {
        const response = await ItemService.editItem(itemId, description);
        return response;
    }
);