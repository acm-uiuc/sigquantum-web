import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Navbar from "./components/navbar";
import LandingPage from "./components/LandingPage";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div style={{backgroundColor: theme.palette.background.default, height:'100vh', width:'100vw'}} >
                <Navbar/>
                <LandingPage/>
            </div>
        </ThemeProvider>
    );
};

export default App;