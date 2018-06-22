import React from 'react';
import PropTypes from 'prop-types';

import LogoBrand from '../../images/logo.svg';

const Logo = ({ className, alt }) => (
  <img src={LogoBrand} className={className} alt={alt} />
);

Logo.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Logo;