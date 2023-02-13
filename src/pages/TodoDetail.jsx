import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import * as CS from '../components/styled/commonStyle';

const Main = styled.main`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 86vh;
`;

const DetailCardBox = styled(CS.DivFlex)`
  width: 400px;
  padding: 2rem;
  border-radius: 1rem;
  background-color: tomato;
  box-shadow: rgb(178 178 178 / 30%) 0 26px 30px -10px,
    rgb(31 31 31 / 71%) 0 16px 10px -10px;
  & {
    color: white;
  }
  button {
    margin-top: 1rem;
  }
`;
const TodoDetail = () => {
  //1. store에 접근하기 위해서 useSelector!!
  const data = useSelector((state) => {
    return state.todoReducer;
  });
  console.log(data);

  //2. 어떤 todo인지 찾아보기 조건에 맞는 것만 return
  const params = useParams();
  const foundData = data.find((item) => {
    console.log('item.id : ', item.id); // type: int
    console.log('params.id : ', params.id); // type: string
    return String(item.id) === params.id;
  });

  console.log(foundData);
  const navigate = useNavigate();
  const moveToHome = () => navigate('/');

  return (
    <>
      <Main>
        <DetailCardBox direction={'column'}>
          <h6>id: {foundData.id}</h6>
          <h1>{foundData.title}</h1>
          <h4>{foundData.desc}</h4>

          <button onClick={moveToHome}>홈으로 이동</button>
        </DetailCardBox>
      </Main>
    </>
  );
};

export default TodoDetail;
