import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { act } from "@testing-library/react";

export const fetchStudio = createAsyncThunk("posts/fetchStudio", async () => {
  const { data } = await axios.get("/posts");
  return data;
});

export const fetchRemove = createAsyncThunk("posts/fetchRemove", async (id) => {
  axios.delete(`/posts/${id}`);
});

const initialState = {
  items: [],
};

const studioSlice = createSlice({
  name: "studio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudio.pending, (state) => {
        // state.items = null;
      })
      .addCase(fetchStudio.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchStudio.rejected, (state) => {
        // state.items = null;
      })
      .addCase(fetchRemove.pending, (state, action) => {
        state.items = state.items.filter((obj) => obj._id !== action.meta.arg);
      });
  },
});

export const studioReducer = studioSlice.reducer;
