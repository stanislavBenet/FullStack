import { createAsyncThunk } from "@reduxjs/toolkit";

export const decorateAsynkThunk = ({ type, thunk }) => {
  const asyncThunk = createAsyncThunk(
    type,
    async (params, { rejectWithValue }) => {
      try {
        return await thunk(params);
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  return asyncThunk;
};

export const pendingReducer = (state, action) => {
  state.isFetching = true;
  state.error = null;
};

export const rejectedReducer = (state, action) => {
  state.isFetching = false;
  state.error = action.payload;
};
