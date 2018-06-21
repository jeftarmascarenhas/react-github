import React from 'react';

import Menu from './Menu';
import Logo from '../common/Logo';
import './Header.css';

const Header = () => (
  <header className="header container-fluid">
    <Logo
      className="header-logo"
      alt="Logo"
    />
    <Menu />
  </header>
);

export default Header;
