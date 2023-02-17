// Actions
const CREATE = 'todo/CREATE';
const DELETE = 'todo/DELETE';
const DONE = 'todo/DONE';

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

// Action Creators
export const addTodoList = (payload) => {
  return {
    type: CREATE,
    payload,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const doneTodoList = (id) => {
  return {
    type: DONE,
    id,
  };
};

// Reducer
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    // reducer stuff
    case CREATE:
      return [...state, action.payload];
    case DELETE:
      return state.filter((item) => item.id !== action.id);
    case DONE:
      return state.map((item) =>
        item.id === action.id ? { ...item, isDone: !item.isDone } : item
      );

    default:
      return state;
  }
}
