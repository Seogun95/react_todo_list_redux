import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTodo, doneTodoList } from '../redux/modules/todosSlice';

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

const TodoCard = ({ done }) => {
  //1. store에 접근하기 위해서 useSelector!!
  const data = useSelector((state) => {
    return state.todoReducer;
  });

  console.log(data);
  //2. Dispatch 가져오기
  const dispatch = useDispatch();

  //3. delete 버튼 Handler
  const deleteTodoList = (id) => {
    dispatch(deleteTodo(id));
  };

  //4. Todo is Done or not? Handler
  const moveTodoList = (id) => {
    dispatch(doneTodoList(id));
  };

  //5. navigate를 통해 상세 페이지 접근
  const navigate = useNavigate();
  const onAnchorBtnHandler = (id) => navigate(`/${id}`);

  return (
    <>
      {data
        .filter((v) => v.isDone === done)
        .map((item, i) => (
          <CardBox key={i}>
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
    </>
  );
};

export default TodoCard;
