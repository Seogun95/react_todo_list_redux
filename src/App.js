import * as React from 'react';
import * as CS from './components/styled/commonStyle';
import Router from './shared/Router';

function App() {
  return (
    <>
      <CS.GlobalStyle />
      <Router />
    </>
  );
}

export default App;
