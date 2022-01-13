import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Nav = () => {
  const [current, setCurrent] = useState<[string]>(['/']);

  const handleClick = (event: { key: string }) => {
    setCurrent([event.key]);
  };

  return (
    <Container>
      <Menu
        selectedKeys={current}
        defaultOpenKeys={['/']}
        onClick={handleClick}
        mode="horizontal"
      >
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/localizacao">
          <Link to="/localizacao">Localização</Link>
        </Menu.Item>
        <Menu.Item key="/mapa">
          <Link to="/mapa">Mapa</Link>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default Nav;
