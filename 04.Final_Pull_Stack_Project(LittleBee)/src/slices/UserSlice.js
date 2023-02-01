import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pending, fulfilled, rejected } from "../helper/ReduxHelper";

const URL = "/signup";

// 로그인 정보 확인 후 세션 생성을 위한 비동기 함수
export const postSession = createAsyncThunk(
  "UserSlice/postSession",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      const response = await axios.post("/login", {
        userid: payload?.userid || "",
        userpw: payload?.userpw || "",
      });
      result = response.data;

      console.log(payload);
      console.log(result);
    } catch (err) {
      console.group("UserSlice.postSession");
      console.error(err);
      console.groupEnd();
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

// 로그인 정보 확인을 위한 비동기 함수
export const getSession = createAsyncThunk(
  "UserSlice/getSession",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      const response = await axios.get("/login");

      result = response.data;
      console.log(result);
    } catch (err) {
      console.group("UserSlice.getSession");
      console.error(err);
      console.groupEnd();
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

// 세션 삭제를 위한 비동기 함수
export const deleteSession = createAsyncThunk(
  "UserSlice/deleteSession",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      const response = await axios.delete("/login");

      result = response.data;
      console.log(result);
    } catch (err) {
      console.group("UserSlice.deleteSession");
      console.error(err);
      console.groupEnd();
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

/** 다중행 데이터 조회를 위한 비동기 함수(아이디 찾기에 사용) */
export const getList = createAsyncThunk("UserSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;
    let params = null;

    console.log(payload);

    try {
        const response = await axios.get(URL, {
            params: {
                userid: payload.userid
            }
        });
        result = response.data;
    } catch (err) {
        console.group("UserSlice.getList");
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
  }
);

/** 단일행 데이터 조회를 위한 비동기 함수 */
export const getItem = createAsyncThunk(
  "UserSlice/getItem",
  async (payload, { rejectWithValue }) => {
    let result = null;

    // console.log(payload);

    try {
      const response = await axios.get(`URL/:id`);
      result = response.data;
    } catch (err) {
      console.group("UserSlice.getItem");
      console.error(err);
      console.groupEnd();
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

/** 아이디 찾기를 위한 비동기 함수 */
export const getFindId = createAsyncThunk('UserSlice/getFindId', async (payload, { rejectWithValue }) => {
    let result = null;

    console.log(payload);

    try {
        const response = await axios.get(`/login/findid`, {
            params: {
                username: payload.username,
                useremail: payload.useremail
            }
        });
        result = response.data;
        console.log(response);
    } catch (err) {
        console.group('UserSlice.getFindId');
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 데이터 저장을 위한 비동기 함수 */
export const postItem = createAsyncThunk(
  "UserSlice/postItem",
  async (payload, { rejectWithValue }) => {
    let result = null;

    // console.log(payload);

    try {
      const response = await axios.post(URL, payload);
      result = response.data;
      console.log(result);
    } catch (err) {
      console.group("UserSlice.postItem");
      console.error(err);
      console.groupEnd();
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

/** 데이터 수정을 위한 비동기 함수 */
export const putItem = createAsyncThunk(
  "UserSlice/putItem",
  async (payload, { rejectWithValue }) => {
    let result = null;
    const params = null;

    try {
      const response = await axios.put(`URL/:id`, params);
      result = response.data;
    } catch (err) {
      console.group("UserSlice.putItem");
      console.error(err);
      console.groupEnd();
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

/** 데이터 삭제를 위한 비동기 함수 */
export const deleteItem = createAsyncThunk(
  "UserSlice/deleteItem",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      const response = await axios.delete(`URL/:id`);
      result = response.data;
    } catch (err) {
      console.group("UserSlice.deleteItem");
      console.error(err);
      console.groupEnd();
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    /** 로그인 정보 확인 후 세션 생성을 위한 액션 함수 */
    [postSession.pending]: pending,
    [postSession.fulfilled]: fulfilled,
    [postSession.rejected]: rejected,

    /** 로그인 정보 확인을 위한 액션 함수 */
    [getSession.pending]: pending,
    [getSession.fulfilled]: (state, { payload }) => {
      return {
        data: payload.my_data,
        msg: payload.result_msg,
      };
    },
    [getSession.rejected]: rejected,

    // 세션 삭제를 위한 액션 함수
    [deleteSession.pending]: pending,
    [deleteSession.fulfilled]: fulfilled,
    [deleteSession.rejected]: rejected,

    /** 다중행 데이터 조회를 위한 액션 함수 */
    [getList.pending]: pending,
    [getList.fulfilled]: fulfilled,
    [getList.rejected]: rejected,

    /** 단일행 데이터 조회를 위한 액션 함수 */
    [getItem.pending]: pending,
    [getItem.fulfilled]: fulfilled,
    [getItem.rejected]: rejected,

    /** 데이터 저장을 위한 액션 함수 */
    [postItem.pending]: pending,
    [postItem.fulfilled]: fulfilled,
    [postItem.rejected]: rejected,

    /** 데이터 수정을 위한 액션 함수 */
    [putItem.pending]: pending,
    [putItem.fulfilled]: fulfilled,
    [putItem.rejected]: rejected,

    /** 데이터 삭제 위한 액션 함수 */
    [deleteItem.pending]: pending,
    [deleteItem.fulfilled]: fulfilled,
    [deleteItem.rejected]: rejected,
  },
});

export default UserSlice.reducer;
