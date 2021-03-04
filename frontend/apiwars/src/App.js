import "./scss/App.scss";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PlanetList from "./components/PlanetList";
import { Navigation } from "./components/Navigation";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";

function App() {

  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/" exact component={PlanetList}/>
          <Route path="/login" component={Login}/>
          <Route path="/registration" component={Registration}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
