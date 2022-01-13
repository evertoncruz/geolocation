import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import MainRoutes from './routes/mainRoutes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <MainRoutes />
      </Router>
      <Home />
    </>
  );
}

export default App;
