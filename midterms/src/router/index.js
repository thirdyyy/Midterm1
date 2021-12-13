import React from 'react'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import theme from "../util/theme"

import SecondPage from '../pages/secondpage';
import LandingPage from '../pages/main';


export default function Index() {
    const THEME = createTheme(theme(true));
    return (
        <ThemeProvider theme={THEME}>
            <Router>
            <Routes>
                <Route path="/"element={<LandingPage/>}  />
                <Route path="/studentevaluation"element={<SecondPage/>}  />
                

            </Routes>
        </Router>
        </ThemeProvider>
        
    )
}
