import { createSlice } from "@reduxjs/toolkit";
import * as httpClient from "../api";
import { decorateAsynkThunk, rejectedReducer, pendingReducer } from "./helpers";

export const getAllUsers = decorateAsynkThunk({
  type: "users/getAllUsers",
  thunk: httpClient.getUsers,
});

// export const getAllUsers = createAsyncThunk(
//   "users/getAllUsers",
//   async (params = {}, thunkAPI) => {
//     try {
//       const {
//         data: { data },
//       } = await httpClient.getUsers(params);
//       return data;
//     } catch (error) {
//       const { rejectWithValue } = thunkAPI;
//       return rejectWithValue(error);
//     }
//   }
// );

export const getAllUsersMore = decorateAsynkThunk({
  type: "users/getAllUsersMore",
  thunk: httpClient.getUsers,
});

// export const getAllUsersMore = createAsyncThunk(
//   "users/getAllUsersMore",
//   async (params = {}, thunkAPI) => {
//     try {
//       const {
//         data: { data },
//       } = await httpClient.getUsers(params);
//       return data;
//     } catch (error) {
//       const { rejectWithValue } = thunkAPI;
//       return rejectWithValue(error);
//     }
//   }
// );

export const createUser = decorateAsynkThunk({
  type: "users/createUser",
  thunk: httpClient.postUser,
});

// export const createUser = createAsyncThunk(
//   "users/createUser",
//   async (values, { rejectWithValue }) => {
//     try {
//       const {
//         data: { data },
//       } = await httpClient.postUser(values);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
    isFetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, pendingReducer);
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      const {
        payload: {
          data: { data },
        },
      } = action;
      state.error = null;
      state.isFetching = false;
      state.users = data;
    });
    builder.addCase(getAllUsers.rejected, rejectedReducer);
    //3 створення
    builder.addCase(createUser.pending, pendingReducer);
    builder.addCase(createUser.fulfilled, (state, action) => {
      const {
        payload: {
          data: { data },
        },
      } = action;
      state.error = null;
      state.isFetching = false;
      state.users.push(data);
    });
    builder.addCase(createUser.rejected, rejectedReducer);
    //
    builder.addCase(getAllUsersMore.pending, pendingReducer);
    builder.addCase(getAllUsersMore.fulfilled, (state, action) => {
      const {
        payload: {
          data: { data },
        },
      } = action;
      state.error = null;
      state.isFetching = false;
      state.users.push(...data);
    });
    builder.addCase(getAllUsersMore.rejected, rejectedReducer);
  },
});

// const { loadUsers } = usersSlice.actions;
export default usersSlice.reducer;
