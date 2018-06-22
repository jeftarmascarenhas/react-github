import React from 'react';

import Menu from './Menu';
import Logo from '../common/Logo';
import './Header.css';

const Header = () => (
  <div className="wrap wrap--padding container-fluid">
    <header className="header">
      <Logo
        className="header__logo"
        alt="Logo"
      />
      <Menu />
    </header>
  </div>
);

export default Header;
