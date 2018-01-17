import { injectGlobal } from 'styled-components'

const reset = injectGlobal`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  li, ul {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }
`

export default reset
