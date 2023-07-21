import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const original_theme = createTheme({
  palette: {
    // dark blue
    primary: {
      main: '#1a1e24', 
    },
    // light circle blue grey
    secondary: {
      main: '#8195A6',
    },
    // red
    tertiary: {
      main: '#b3532c',
    },
    // lighter outer blue
    quaternary: {
      main: '#455363',
    },
    // add a background color to the body
    background: {
      default: '#233240',
    },
  },
});

const theme = responsiveFontSizes(original_theme);

export default theme;

