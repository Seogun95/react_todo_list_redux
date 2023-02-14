import React from 'react';
import styled from 'styled-components';
import * as CS from '../components/styled/commonStyle';
import AddTodo from '../components/AddTodo';
import TodoCard from '../components/TodoCard';

const TodoBoxContainer = styled(CS.DivFlex)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
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

const Home = () => {
  return (
    <>
      <AddTodo />

      <TodoBoxContainer>
        <TodoBox direction={'column'}>
          <TodoSectionTitle>안 했다</TodoSectionTitle>
          <TodoCard done={false} />
        </TodoBox>
        <TodoBox direction={'column'}>
          <TodoSectionTitle>했다</TodoSectionTitle>
          <TodoCard done={true} />
        </TodoBox>
      </TodoBoxContainer>
    </>
  );
};

export default Home;
