import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.direction};
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        color: black
    };
    button{
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 1rem;
    };
    input{
        outline: none;
        padding-left: 10px;
        border: none;
    };
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
        font-weight: 900;
        line-height: 1.2;
    };

    h1,
    .h1 {
        font-size: 2rem;
    };

    h2,
    .h2 {
        font-size: 1.5rem;
    }

    h3,
    .h3 {
       font-size: 1.4rem;
    };

    h4,
    .h4 {
       font-size: 1.3rem;
    };

    h5,
    .h5 {
        font-size: 1.2rem;
    };

    h6,
    .h6 {
       font-size: 1.1rem;
    };
`;
