import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { pending, fulfilled, rejected } from '../helper/ReduxHelper';


const API_URL = '/products';

/** 리스트 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk('ProductSlice/getList', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(`${API_URL}/${payload?.category}`);
        result = response.data;

    } catch (err) {
        console.group('ProductSlice.getList');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 검색 리스트 조회를 위한 비동기 함수 */
export const getSearchList = createAsyncThunk('ProductSlice/getSearchList', async (payload, { rejectWithValue }) => {
    let result = null;
    console.log(payload);
    try {
        const response = await axios.get(`/search`, {
            params: {
                query: payload?.query || ''
            }
        });

        result = response.data;
        console.log(result);

    } catch (err) {
        console.group('ProductSlice.getSearchList');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});

/** Main리스트 정렬 */
export const getSort = createAsyncThunk('ProductSlice/getSort', async (payload, { rejectWithValue }) => {
    let result = null;
    console.log(payload);

    try {
        const response = await axios.get(`${API_URL}/${payload?.category}/sort`, {
            params: {
                // query: payload?.category || '',
                value: payload?.value || ''
            }
        });
        result = response.data;
        // console.log(response);

    } catch (err) {
        console.group('ProductSlice.getSort');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});

/** subCategory에 따른 데이터 출력 */
export const getSubCategory = createAsyncThunk('ProductSlice/getSubCategory', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(`${API_URL}/${payload.category}/${payload.subcategory}`, {
            query: payload?.query || ''
        });
        result = response.data;
    }
    catch (err) {
        console.group('ProductSlice.getSubCategory');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }
    return result;
})

/** 아이템 조회를 위한 비동기 함수 */
export const getItem = createAsyncThunk('ProductSlice/getItem', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(`/goods/${payload?.category}/${payload?.id}`);
        result = response.data;
        result.data.option = response.opt;

    } catch (err) {
        console.group('ProductSlice.getItem');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});


const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getList.pending]: pending,
        [getList.fulfilled]: fulfilled,
        [getList.rejected]: rejected,

        [getSort.pending]: pending,
        [getSort.fulfilled]: fulfilled,
        [getSort.rejected]: rejected,

        [getSubCategory.pending]: pending,
        [getSubCategory.fulfilled]: fulfilled,
        [getSubCategory.rejected]: rejected,

        [getSearchList.pending]: pending,
        [getSearchList.fulfilled]: fulfilled,
        [getSearchList.rejected]: rejected,

        [getItem.pending]: pending,
        [getItem.fulfilled]: (state, {payload}) => {
            return {
                data: payload.data,
                opt: payload.opt,
                pagenation: payload.pagenation,
                loading: false,
                error: null,
            }
        },
        [getItem.rejected]: rejected,
    },
});

export default ProductSlice.reducer;