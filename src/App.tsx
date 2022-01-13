import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'antd/dist/antd.variable.min.css';

import Header from './components/Header';
import GlobalStyle from './globalStyles';
import MainRoutes from './routes/mainRoutes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <MainRoutes />
      </Router>
    </>
  );
}

export default App;
