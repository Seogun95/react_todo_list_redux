import React from 'react';
import styled from 'styled-components';
import * as CS from '../components/styled/commonStyle';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoList } from '../redux/modules/todosSlice';
import useInputAutoFoucs from '../hooks/useInputAutoFoucs';
import useInputOnChange from '../hooks/useInputOnChange';
import { __addTodo } from '../redux/modules/todosSlice';

const TodoCreateContainer = styled(CS.DivFlex)`
  width: 80%;
  gap: 1rem;
  margin: 2rem auto;
`;
const TodoInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InputLable = styled.label`
  display: inline-block;
  position: absolute;
  top: -5px;
  left: 14px;
  padding: 10px;
  background: white;
  font-size: 14px;
  color: #888;
  font-weight: bold;
  span {
    color: #da4841;
    vertical-align: -1px;
  }
`;

const TodoInput = styled.input`
  height: 2rem;
  width: 100%;
  border: 1px solid #dddddd;
  font-size: 1rem;
  line-height: 1.45;
  letter-spacing: -0.04rem;
  border-radius: 8px;
  padding: 16px;
  margin-top: 12px;
  &:focus,
  &:active {
    border: 1px solid tomato;
  }
`;

const AddTodo = () => {
  const [titleInput, setTitleInput, titleInputHanlder] = useInputOnChange('');
  const [descInput, setDescInput, descInputHanlder] = useInputOnChange('');

  //커스텀 훅 (useInputAutoFoucs)
  const inputFoucsRef = useInputAutoFoucs();

  //1. store에 접근하기 위해서 useSelector!!
  const data = useSelector((state) => {
    return state.todoReducer;
  });

  console.log(data);
  //2. Dispatch 가져오기
  const dispatch = useDispatch();

  //3. create 생성 버튼 Handler
  const createTodoList = (e) => {
    e.preventDefault();
    if (titleInput !== '') {
      dispatch(
        __addTodo({
          title: titleInput,
          desc: descInput,
          id: Date.now(),
          isDone: false,
        })
      );
      setTitleInput('');
      setDescInput('');
    }
  };

  return (
    <>
      <form action="/" onSubmit={createTodoList}>
        <TodoCreateContainer direction={'column'}>
          <TodoInputContainer>
            <InputLable ref={inputFoucsRef} htmlFor="todoTitleInput">
              <span>* </span>할 일
            </InputLable>
            <TodoInput
              id="todoTitleInput"
              value={titleInput}
              onChange={titleInputHanlder}
            />
          </TodoInputContainer>
          <TodoInputContainer>
            <InputLable htmlFor="todoDescInput">
              <span>* </span>자세히
            </InputLable>
            <TodoInput
              id="todoDescInput"
              value={descInput}
              onChange={descInputHanlder}
            />
          </TodoInputContainer>
          <button>추가하기</button>
        </TodoCreateContainer>
      </form>
    </>
  );
};

export default AddTodo;
