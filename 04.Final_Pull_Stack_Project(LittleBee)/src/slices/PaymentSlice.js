import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { pending, fulfilled, rejected } from '../helper/ReduxHelper';

const API_URL = '/payment';

/** 리스트 조회를 위한 비동기 함수 */
export const getAllList = createAsyncThunk('PaymentSlice/getAllList', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(`${API_URL}`, {
            params: {
                select: payload?.select,
                user: payload?.user
            }
        });
        result = response.data;

    } catch (err) {
        console.group('PaymentSlice.getAllList');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 데이터 저장을 위한 비동기 함수 */
export const postItem = createAsyncThunk('PaymentSlice/postItem', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.post(`/payment`, payload);
        result = response.data;
    } catch (err) {
        console.group('PaymentSlice.postItem');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});

const PaymentSlice = createSlice({
    name: 'PaymentSlice',
    initialState: {
        data: null,
        loading: false,
        error: null,

    },
    reducers: {},
    extraReducers: {
        [getAllList.pending]: pending,
        [getAllList.fulfilled]: fulfilled,
        [getAllList.rejected]: rejected,

        [postItem.pending]: pending,
        [postItem.fulfilled]: fulfilled,
        [postItem.rejected]: rejected,
    },
});

export default PaymentSlice.reducer;