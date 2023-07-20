import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Navbar from "./components/navbar";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Navbar/>
            </div>
        </ThemeProvider>
    );
};

export default App;