import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Gear from "./Gear"
import PackDetail from "./PackDetail";
import React from "react";
import MantisSidebar from "./MantisSidebar";

function App() {

    return (
        <div className="App">
            <div className={'row text-white'}>
                <Router>
                    <div
                        className={'col-1'}>
                        <MantisSidebar/>
                    </div>
                    <div className={'col-11'}>
                        <Routes>
                            <Route exact path={"/home"} element={<Home/>}/>
                            <Route exact path={"/gear"} element={<Gear/>}/>
                            <Route path={"/gear/pack/:id"} element={<PackDetail/>}/>
                        </Routes>
                    </div>
                </Router>
            </div>
        </div>
    )

}

export default App;
