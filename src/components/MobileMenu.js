import React from 'react';
import SideNav from './SideNav';
import { slide as Menu } from 'react-burger-menu';

const MyComponent = () => {
  return (
    <Menu width={320}>
      <SideNav isMobile/>
    </Menu>
  );
};

export default MyComponent;
