import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: 0,
  end: 6,
  count: 0,
};

export const paginationSlice = createSlice({
  name: "paginationCounter",
  initialState,
  reducers: {
    loadMore: (state) => {
      state.start += 6;
      state.end += 6;
    },
    loadPrevious: (state) => {
      state.start -= 6;
      state.end -= 6;
    },
    nextCount: (state) => {
      state.count += 1;
    },
    previousCount: (state) => {
      state.count -= 1;
    },
    resetCount: (state) => {
      state.count = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadMore, loadPrevious, nextCount, previousCount, resetCount  } = paginationSlice.actions;

export default paginationSlice.reducer;
