import React from 'react';

import LinkItem  from '../common/LinkItem';

const Menu = () => (
  <nav>
    <LinkItem to="/" label="Home" className="header-nav-item" />
    <LinkItem to="/about" label="About" className="header-nav-item" />
  </nav>
);

export default Menu;