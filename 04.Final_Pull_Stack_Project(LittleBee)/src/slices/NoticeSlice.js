import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { pending, fulfilled, rejected } from '../helper/ReduxHelper';

/** 리스트 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk('NoticeSlice/getList', async (payload, { rejectWithValue }) => {
    let result = null;
    try {
        const response = await axios.get('/noticelist', {
            params: {
                noticecategory: payload?.noticecategory || '',
                noticetitle: payload?.noticetitle || ''
            }
        });
        result = response.data;
        console.log(payload);
        console.log(result);
    } catch (err) {
        console.group('NoticeSlice.getList');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 선택한 글 조회를 위한 비동기 함수 */
export const getItem = createAsyncThunk('NoticeSlice/getItem', async (payload, { rejectWithValue }) => {
    let result = null;
    console.log(payload);
    try {
        const response = await axios.get(`/notice`, {
            params: {
                noticenum: payload?.noticenum
            }
        });
        result = response.data;
        console.log(result);
    } catch (err) {
        console.group('NoticeSlice.getItem');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});

const NoticeSlice = createSlice({
    name: 'NoticeSlice',
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
    
        [getItem.pending]: pending,
        [getItem.fulfilled]: fulfilled,
        [getItem.rejected]: rejected,
    },
});

export default NoticeSlice.reducer;