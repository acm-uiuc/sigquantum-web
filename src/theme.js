import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const original_theme = createTheme({
  palette: {
    // dark blue
    primary: {
      main: '#1a1e24', 
      main2: '#15374a',
    },
    // light circle blue grey
    secondary: {
      // main: '#8195A6',
      main: '#9faebb',
      // main2: '#3f7ba1',
    },
    // red
    tertiary: {
      main: '#b3532c',
      main2: '#c67236',
    },
    // lighter outer blue
    quaternary: {
      main: '#455363',
    },
    // add a background color to the body
    background: {
      default: '#233240',
      main: '#1f4c63',
    },
  },
});

const theme = responsiveFontSizes(original_theme);

export default theme;

