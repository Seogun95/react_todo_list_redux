import React, { useState } from 'react';
import styled from 'styled-components';
import * as CS from '../components/styled/commonStyle';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodoList,
  deleteTodo,
  doneTodoList,
} from '../redux/modules/todoModule';
import { useNavigate } from 'react-router-dom';

const TodoCreateContainer = styled(CS.DivFlex)`
  width: 80%;
  gap: 1rem;
  margin: 0 auto;
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
  height: 5rem;
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

const TodoBoxContainer = styled(CS.DivFlex)`
  width: 80%;
  margin: 2rem auto 1rem;
  gap: 5rem;
`;

const TodoBox = styled(CS.DivFlex)`
  width: 400px;
  grid-gap: 2rem;
  padding-bottom: 4rem;
`;

const TodoSectionTitle = styled.h4`
  gap: 0.4rem;
  display: flex;
`;

const CardBox = styled.div`
  width: 100%;
  background: #6d6d6d;
  border-radius: 1rem;
  color: white;
  transition: 0.2s linear;
  box-shadow: rgb(178 178 178 / 30%) 0 26px 30px -10px,
    rgb(31 31 31 / 71%) 0 16px 10px -10px;
  overflow: hidden;
  div {
    padding: 2rem;
  }
`;

const Home = () => {
  const [titleInput, setTitleInput] = useState('');
  const [descInput, setDescInput] = useState('');

  const titleInputHanlder = (e) => setTitleInput(e.target.value);
  const descInputHanlder = (e) => setDescInput(e.target.value);

  //1. store에 접근하기 위해서 useSelector!!
  const data = useSelector((state) => {
    return state.todoReducer;
  });

  console.log(data);
  //2. Dispatch 가져오기
  const dispatch = useDispatch();

  //3. create 생성 버튼 Handler
  const createTodoList = () => {
    if (titleInput !== '') {
      dispatch(addTodoList(titleInput, descInput));
      setTitleInput('');
      setDescInput('');
    }
  };

  //4. delete 버튼 Handler
  const deleteTodoList = (id) => {
    dispatch(deleteTodo(id));
  };

  //5. Todo is Done or not? Handler
  const moveTodoList = (id) => {
    dispatch(doneTodoList(id));
  };

  //6. navigate를 통해 상세 페이지 접근
  const navigate = useNavigate();
  const onAnchorBtnHandler = (id) => navigate(`/${id}`);

  return (
    <>
      <TodoCreateContainer direction={'column'}>
        <TodoInputContainer>
          <InputLable htmlFor="todoTitleInput">
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
        <button onClick={createTodoList}>추가하기</button>
      </TodoCreateContainer>

      <TodoBoxContainer direction={'row'}>
        <TodoBox direction={'column'}>
          <TodoSectionTitle>했다</TodoSectionTitle>
          {/* //store의 리듀서에 있는 data를 받아와서 map과 filter로 isDone값에 따라 카드를 보여줌 */}
          {data
            .filter((v) => v.isDone === false)
            .map((item, i) => (
              <CardBox key={item.id}>
                <div>
                  <button onClick={() => onAnchorBtnHandler(item.id)}>
                    상세페이지
                  </button>
                  <h2>{item.title}</h2>
                  <h4>{item.desc}</h4>
                </div>
                <button onClick={() => deleteTodoList(item.id)}>삭제</button>
                <button onClick={() => moveTodoList(item.id)}>
                  {item.isDone ? '취소' : '완료'}
                </button>
              </CardBox>
            ))}
        </TodoBox>
        <TodoBox direction={'column'}>
          <TodoSectionTitle>안했다</TodoSectionTitle>
          {data
            .filter((v) => v.isDone === true)
            .map((item, i) => (
              <CardBox key={item.id}>
                <div>
                  <button onClick={() => onAnchorBtnHandler(item.id)}>
                    상세페이지
                  </button>
                  <h2>{item.title}</h2>
                  <h4>{item.desc}</h4>
                </div>
                <button onClick={() => deleteTodoList(item.id)}>삭제</button>
                <button onClick={() => moveTodoList(item.id)}>
                  {item.isDone ? '취소' : '완료'}
                </button>
              </CardBox>
            ))}
        </TodoBox>
      </TodoBoxContainer>
    </>
  );
};

export default Home;
