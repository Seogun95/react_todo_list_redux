import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//Thunk
//(1) 이름 : 의미는 크게 없다
//(2) 함수
//    ㄴ 인자값 (payload, thunkAPI) => { }
//thunkAPI.dispath(액션크리에이터(payload))
export const __addTodo = createAsyncThunk('ADD_TODO_WAIT', (arg, thunkAPI) => {
  setTimeout(() => {
    thunkAPI.dispatch(addTodoList(arg));
  }, 3000);
});

//초기 상태 값 (state)
const initialState = [
  {
    id: 0,
    title: '마라탕 먹기',
    desc: '목요일에 친구와 약속 있음',
    isDone: false,
  },
  {
    id: 1,
    title: 'Typescript 공부하기',
    desc: '수요일 까지 코딩애플 완강',
    isDone: true,
  },
];

const todosSlice = createSlice({
  name: 'todoReducer', // 이 모듈의 이름
  initialState, // 이 모듈의 초기상태 값
  reducers: {
    addTodoList: (state, action) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    doneTodoList: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item
      );
    },
  }, // 이 모듈의 Reducer 로직
});

export default todosSlice.reducer;
export const { addTodoList, deleteTodo, doneTodoList } = todosSlice.actions;
