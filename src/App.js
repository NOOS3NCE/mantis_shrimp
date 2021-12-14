import './App.css';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import MantisNavBar from "./MantisNavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Gear from "./Gear"
import PackDetail from "./PackDetail";

function App() {

    return (
        <div className="App">
            <Router>
                <MantisNavBar/>
                <Routes>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/gear"} element={<Gear/>}/>
                    <Route path={"/gear/pack/:id"} element={<PackDetail/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
