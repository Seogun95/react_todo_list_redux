import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyles = styled.header`
  width: 100%;
  background: tomato;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: white;
`;
const FooterStyles = styled.footer`
  width: 100%;
  height: 70px;
  display: flex;
  background: SeaGreen;
  align-items: center;
  justify-content: center;
  a {
    color: white;
    text-decoration: none;
  }
`;

const LayoutStyles = styled.div`
  min-height: 86vh;
`;

function Header() {
  return (
    <HeaderStyles>
      <span>서근 TODOLIST</span>
    </HeaderStyles>
  );
}

function Footer() {
  return (
    <FooterStyles>
      <Link to="https://seons-dev.tistory.com">서근개발노트</Link>
    </FooterStyles>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <LayoutStyles>{children}</LayoutStyles>
      <Footer />
    </div>
  );
}

export default Layout;
