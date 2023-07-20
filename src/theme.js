import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // dark blue
    primary: {
      main: '#233240', 
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
      default: '#1a1e24',
    },
  },
});

export default theme;

