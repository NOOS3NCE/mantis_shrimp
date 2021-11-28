import './App.css';
import MantisNavBar from "./MantisNavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Gear from "./Gear";

function App() {
    return (
        <div className="App">
            <Router>
                <MantisNavBar/>
                <Routes>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/gear"} element={<Gear/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
