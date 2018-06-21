import React from 'react';
import PropTypes from 'prop-types';

import logoSrc from '../../images/logo.svg';

const Logo = ({ className, alt }) => (
  <img src={logoSrc} className={className} alt={alt} />
);

Logo.PropTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Logo;