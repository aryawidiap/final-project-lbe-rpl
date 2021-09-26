import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Details from "./component/Details";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
