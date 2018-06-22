import React from 'react';

import LinkItem  from '../common/LinkItem';

const Menu = () => (
  <nav className="menu">
    <LinkItem to="/" label="Home" className="menu__item" />
    <LinkItem to="/about" label="About" className="menu__item" />
  </nav>
);

export default Menu;