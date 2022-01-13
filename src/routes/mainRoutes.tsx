import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="*"
        element={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '30px',
            }}
          >
            Not Found Route
          </div>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
