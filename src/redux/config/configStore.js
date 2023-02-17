import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../modules/todoModule';

const store = configureStore({
  reducer: {
    todoReducer,
  },
});

export default store;
