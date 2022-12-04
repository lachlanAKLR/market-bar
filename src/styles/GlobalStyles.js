import { createGlobalStyle } from 'styled-components';

import atlas from '../assets/fonts/AtlasGrotesk-Black.otf';
import picnic from '../assets/fonts/PicNic-Regular.otf';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  padding: 0;
  margin: 0;
  /* background-color: #c7fb83; */
}

@font-face {
    font-family: Atlas;
    src: url(${atlas});
  }

  @font-face {
    font-family: Picnic;
    src: url(${picnic});
  }

a, p, li, ul, h2 {
  font-family: 'Atlas', sans-serif; 
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: normal;
  list-style: none;
  margin: 0;
  padding: 0;
  color: #c70d29;
}

h1 {
  font-family: 'Picnic', serif; 
  font-size: 150px;
  line-height: 150px;
  text-decoration: none;
  font-weight: normal;
  list-style: none;
  margin: 0;
  padding: 0;
  color: #c70d29;
}


  button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}



`;
export default GlobalStyles;
