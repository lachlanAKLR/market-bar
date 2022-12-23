import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import GlobalStyles from '../styles/GlobalStyles';
import LandingText from '../components/LandingText';
import BottomLogo from '../components/BottomLogo';
import BackgroundImage from '../components/BackgroundImage';

const HomeStyles = styled.div`
  .header__logo {
    width: 50%;
    max-width: 500px;
  }
  .header__wrapper {
    width: 100%;
    padding: 50px 50px;
  }
  .header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bottom__logo {
    width: 180px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  h1 {
    text-align: center;
    font-size: 12vw;
    line-height: 12vw;
  }

  .landing__text {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translate(0, -55%);
  }

  .background__image {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1000;
  }

  .gatsby-image-wrapper img {
    height: 100vh;
    width: 100vw;
  }

  @media screen and (max-width: 599px) {
    .header__inner {
      gap: 0 20px;
      justify-content: center;
      position: relative;
      top: 80px;
    }

    .header__logo {
      position: absolute;
      top: -60px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 90%;
    }

    .header__wrapper {
      padding: 10px 10px;
    }

    h1 {
      font-size: 20vw;
      line-height: 20vw;
    }

    .bottom__logo {
      width: 150px;
      bottom: 20px;
    }
  }
`;

export const Head = () => (
  <>
    <title>Market Bar — A Bar for All</title>
    <meta property="og:title" content="Market Bar" />
    <meta name="description" content="A Bar for All" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="A Bar for All" />
    <meta
      property="og:image"
      content="https://i.ibb.co/h9PtrCt/Market-Bar-Share-Icon-A.jpg"
    />
    <meta name="twitter:card" content="summary_large_image" />
  </>
);

export default function Index() {
  return (
    <HomeStyles>
      <GlobalStyles />
      <Nav />
      <LandingText />
      <BottomLogo />
      <BackgroundImage />
    </HomeStyles>
  );
}
