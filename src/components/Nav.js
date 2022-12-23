import React from 'react';

import Logo from '../images/MarketBar_Wordmark_Black_RGB.svg';

export default function Nav() {
  return (
    <div className="header__wrapper">
      <div className="header__inner">
        <div className="header__link">
          <p>
            <a
              href="https://www.instagram.com/marketbarrichmond/"
              target="blank"
            >
              INSTAGRAM
            </a>
          </p>
        </div>
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__link">
          <p>
            <a href="mailto:marketbarrichmond@gmail.com" target="blank">
              EMAIL
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
