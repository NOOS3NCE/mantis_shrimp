import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Gear from "./Components/Gear/Gear"
import PackDetail from "./Components/Gear/Pages/PackDetail";
import React, {useEffect, useState} from "react";
import MantisSidebar from "./Components/Sidebar/MantisSidebar";
import {createTheme, ThemeProvider} from "@mui/material";
import Schedule from "./Components/Schedule/Schedule";
import Sales from "./Components/Sales/Sales";
import NewEvent from "./Components/Sales/Event/NewEvent";

function App() {
    const darkTheme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#0DCCAA',
                contrastText: '#FFF',
            },
            secondary: {
                main: '#f50057',
            },
            text: {
                primary: '#000',
            },
        }
    })
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">
                <div className={'row text-white'}>
                    <Router>
                        {width > 764 &&
                        <div
                            className={'col-1'}>
                            <MantisSidebar/>
                        </div>}
                        <div className={`col-${width > 764 ? '11' : '12'}`}>
                            <Routes>
                                <Route path={"/gear"} element={<Gear/>}/>
                                <Route path={"/gear/pack/:id"} element={<PackDetail/>}/>
                                <Route path={"/home"} element={<Home/>}/>
                                <Route path={"/schedule"} element={<Schedule/>}/>
                                <Route path={"/sales"} element={<Sales/>}/>
                                <Route path={"/sales/event/new"} element={<NewEvent/>}/>
                            </Routes>
                        </div>
                    </Router>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App;
