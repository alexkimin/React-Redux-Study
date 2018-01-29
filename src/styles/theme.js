export const theme = {
  color: {
    primary: '#37B2EF',
    secondary: '#38E680',
    disabled: 'rgba(0,0,0,0.4)',
    white: '#FFF',
    black: '#222',
    border: 'rgba(0,0,0,0.1)',
    base: 'rgba(0,0,0,0.4)',
    alert: '#FC4F60',
    info: '#4C98E6',
    link: '#41bbe1',
    background: '#e1e5e9',
  },
  font: {
    title:`
    Raleway,
    sans-serif`,
    main:`
    Roboto,
    Helvetica,
    Arial,
    sans-serif`,
    base: '1rem',
    small: '0.75rem',
    xsmall: '0.5rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
  },
  space:{
    padded: '1rem'
  },
  transition: '300ms ease-in-out',
  shadow: `
    0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 3px 5px -1px rgba(0, 0, 0, 0.3)
  `,
  screenSizes: {
    mobile: {
      type: 'max-width',
      size: 25
    },
    medium: {
      type: 'min-width',
      size: 45
    },
    large: {
      type: 'min-width',
      size: 55
    },
  },
}

export default theme
