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
import Login from "./Components/Users/Login/Login";
import UserProfile from "./Components/Users/Login/UserProfile";
import MantisChat from "./Components/MantisChat";
import UserDetails from "./Components/Users/UserDetails";
import UserList from "./Components/Users/UserList";

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
                                <Route path={"/"} element={<Home/>}/>
                                <Route path={"/gear"} element={<Gear/>}/>
                                <Route path={"/gear/pack/:id"} element={<PackDetail/>}/>
                                <Route path={"/schedule"} element={<Schedule/>}/>
                                <Route path={"/sales"} element={<Sales/>}/>
                                <Route path={"/sales/event/new"} element={<NewEvent/>}/>
                                <Route path={"/login"} element={<Login/>}/>
                                <Route path={"/user"} element={<UserList/>}/>
                                <Route path={"/user/me"} element={<UserProfile/>}/>
                                <Route path={"/user/:id"} element={<UserDetails/>}/>
                            </Routes>
                        </div>
                    </Router>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App;
