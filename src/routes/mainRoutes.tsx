import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Location from '../pages/Location';
import Maps from '../pages/Maps';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/localizacao" element={<Location />} />
      <Route path="/mapa" element={<Maps />} />

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
