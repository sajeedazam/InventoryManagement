import { createAsyncThunk } from "@reduxjs/toolkit";
import ItemService from './service';

export const getItemsAsync = createAsyncThunk(
    'GET_ITEMS',
    async () => {
        return await ItemService.getItems();
    }
);