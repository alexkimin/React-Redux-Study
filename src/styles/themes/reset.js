import { injectGlobal } from 'styled-components'

// @font-face {
//   font-family: 'Raleway';
//   src: url('static/fonts/Raleway/Raleway-Light.ttf');
// }

const reset = injectGlobal`

  body {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
    background: #e1e5e9;
  }


  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }
`

export default reset
