import React from 'react';
import Router from './Router/Router';
import { GlobalStyle } from './styles/GlobalStyle';


const App = () => {
  return (
    <div>
      <Router />
      <GlobalStyle />
    </div>
  );
};

export default App;