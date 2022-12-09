import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  jokesFromSearch: {},
};


export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSearchJokes: (state, action) => {
      state.jokesFromSearch = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearch, setSearchJokes } = searchSlice.actions;

export default searchSlice.reducer;
