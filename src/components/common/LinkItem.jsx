import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const LinkItem = ({ to, className, label }) => (
  <Link to={to} className={className}>{label}</Link>
);

LinkItem.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
};

export default LinkItem;
