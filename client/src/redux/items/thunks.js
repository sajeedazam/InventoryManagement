import { createAsyncThunk } from "@reduxjs/toolkit";
import ItemService from './service';

export const getItemsAsync = createAsyncThunk(
    'GET_ITEMS',
    async () => {
        try {
            return await ItemService.getItems();
        } catch (error) {
            throw new Error('Failed to retrieve items from the database');
        }
    }
);


export const addItemAsync = createAsyncThunk(
    'ADD_ITEM',
    async (item) => {
        try {
            return await ItemService.addItem(item.name, item.sku, item.description, item.price, item.imageUrl);
        } catch (error) {
            throw new Error('Failed to add item to the database');
        }
    }
);

export const deleteItemAsync = createAsyncThunk(
    'DELETE_ITEM',
    async (itemId) => {
        try {
            return await ItemService.deleteItem(itemId);
        } catch (error) {
            throw new Error('Failed to delete');
        }
    }
);

export const editItemAsync = createAsyncThunk(
    'EDIT_ITEM',
    async ({ itemId, description }) => {
        try {
            return await ItemService.editItem(itemId, description);
        } catch (error) {
            throw new Error('Failed to edit');
        }

    }
);