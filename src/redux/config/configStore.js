import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../modules/todosSlice';

const store = configureStore({
  reducer: {
    todoReducer,
  },
});

export default store;
