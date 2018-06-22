import React from 'react';

import Logo from '../common/LogoSVG';
import './banner-events.css';

const Banner = ({ events }) => (
  <div className="events-banner container-fluid">
    <div className="events-banner__logo-wrapper">
      <Logo className="events-banner__logo" />
    </div>
    <div className="container container-center">
      <div className="row">
        <div className="col-md-12 col-lg-8 col-lg-offset-2">
          <h1 className="events-banner__title text-uppercase">
            <blockquote className="events-banner__title-featured">Eventos</blockquote> de tecnologias. 
            Confira os eventos por estado.
          </h1>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;