import './App.css';
import MantisNavBar from "./MantisNavBar";
import {Switch, BrowserRouter as Router, Route} from "react-router";

function App() {
    return (
        <div className="App">
            <MantisNavBar/>
            <Router>
                <Switch>
                    <Route>
                        <Home/>
                    </Route>
                    <Route>
                        <Gear/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
