import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type {hierarchy} from "../../types/types"
export interface DataState {
  data: hierarchy[]; 
  isLoading: boolean;
}

const initialState: DataState = {
  data: [],
  isLoading: false,
};

export const getCitizensData = createAsyncThunk(
  'user/getToken',
  async (config: string) => {
    const data = axios
      .get(
        `https://citizens-back-production.up.railway.app/citizens/all?config=${config}`
      )
      .then((response) => {
        return response.data;
      });
    return data;
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCitizensData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCitizensData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getCitizensData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// export const { } = counterSlice.actions;

export default dataSlice.reducer;
