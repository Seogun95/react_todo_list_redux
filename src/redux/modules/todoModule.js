// Actions
const CREATE = 'todo/CREATE';

//초기 상태 값 (state)
const initialState = [
  {
    id: 1,
    title: '마라탕 먹기',
    desc: '목요일에 친구와 약속 있음',
    isDone: false,
  },
];

// Action Creators
export const addTodoList = (title, desc) => {
  return {
    type: CREATE,
    title,
    desc,
  };
};

// Reducer
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    // reducer stuff
    case CREATE:
      //[...기존값을, {새로운 객체로 넣어줘라}]
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          desc: action.desc,
          isDone: false,
        },
      ];

    default:
      return state;
  }
}
