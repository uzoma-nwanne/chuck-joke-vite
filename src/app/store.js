import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from '../features/pagination-slice';
import categoryReducer from '../features/category-slice';
import searchReducer from '../features/search-slice';
import statisticsReducer from '../features/statistics-slice';

export const store = configureStore({
  reducer: {
    paginationCounter : paginationReducer,
    selectedCategory : categoryReducer,
    search : searchReducer,
    jokeStatistics: statisticsReducer,
  },
})