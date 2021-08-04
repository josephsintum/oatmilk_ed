import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#111D5E',
    },
    secondary: {
      main: '#C0E218',
    },
    error: {
      main: red.A400,
    },
    // @ts-ignore
    pale: '#D2FAFB',
    red: '#C70039',
    orange: '#F37121',
  },
  typography: {
    fontFamily: [
      '"Exo 2"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontWeight: 500,
      fontSize: '1.1em',
    },
    button: {
      fontWeight: 'bold',
      letterSpacing: 1,
    },
  },
})

export default theme
