import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { pending, fulfilled, rejected } from '../helper/ReduxHelper';

const API_URL = '/products';

/** 리스트 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk('BasketSlice/getList', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(`/mymain/mybasket`);
        result = response.data;
        result.data.option = response.data.opt;

    } catch (err) {
        console.group('BasketSlice.getList');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 데이터 저장을 위한 비동기 함수 */
export const postItem = createAsyncThunk('BasketSlice/postItem', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.post(`/goods/:category/:prodnum`, payload);
        result = response.data;
    } catch (err) {
        console.group('BasketSlice.postItem');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 수량 증감 변화를 위한 비동기 함수 */
export const editItem = createAsyncThunk('BasketSlice/editItem', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.put('/mymain/mybasket', payload);
        result = response.data;

    } catch (err) {
        console.group('BasketSlice.editItem');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 선택 삭제 */
export const deleteItem = createAsyncThunk('BasketSlice/deleteItem', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.delete(`/mymain/mybasket/${payload.basketno}`);
        result = response.data;
    } catch (err) {
        console.group('BasketSlice.deleteItem');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 전체 삭제 */
export const deleteAll = createAsyncThunk('BasketSlice/deleteItem', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        const response = await axios.delete(`/mymain/mybasket`, {
            params: {
                usernum: payload?.usernum
            }
        });
        result = response.data;
    } catch (err) {
        console.group('BasketSlice.deleteAll');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});

const BasketSlice = createSlice({
    name: 'BasketSlice',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getList.pending]: pending,
        [getList.fulfilled]: (state, {payload}) => {
            return {
                data: payload.data,
                opt: payload.opt,
                loading: false,
                error: null,
            }
        },
        [getList.rejected]: rejected,

        [postItem.pending]: pending,
        [postItem.fulfilled]: fulfilled,
        [postItem.rejected]: rejected,
    },
});

export const { finalPrice } = BasketSlice.actions;
export default BasketSlice.reducer;