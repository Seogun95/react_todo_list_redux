import * as React from 'react';
import * as CS from './components/styled/commonStyle';
import Router from './shared/Router';

function App() {
  return (
    <React.Fragment>
      <CS.GlobalStyle />
      <Router />
    </React.Fragment>
  );
}

export default App;
