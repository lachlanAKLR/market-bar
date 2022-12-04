import React from 'react';

import Logo from '../images/MarketBar_Wordmark_Black_RGB.svg';

export default function Nav() {
  return (
    <div className="header__wrapper">
      <div className="header__inner">
        <div className="header__link">
          <p>
            <a href="/" target="blank">
              INSTAGRAM
            </a>
          </p>
        </div>
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__link">
          <p>
            <a href="/" target="blank">
              EMAIL
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
