import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Gear from "./Components/Gear/Gear"
import PackDetail from "./Components/Gear/Pages/PackDetail";
import React from "react";
import MantisSidebar from "./Components/Sidebar/MantisSidebar";
import {createTheme, ThemeProvider} from "@mui/material";

function App() {
    const darkTheme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#0DCCAA',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#f50057',
            },
            text: {
                primary: '#ffffff',
            },
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">
                <div className={'row text-white'}>
                    <Router>
                        <div
                            className={'col-1'}>
                            <MantisSidebar/>
                        </div>
                        <div className={'col-11'}>
                            <Routes>
                                <Route path={"/gear"} element={<Gear/>}/>
                                <Route path={"/gear/pack/:id"} element={<PackDetail/>}/>
                                <Route path={"/"} element={<Home/>}/>
                            </Routes>
                        </div>
                    </Router>
                </div>
            </div>
        </ThemeProvider>
    )

}

export default App;
