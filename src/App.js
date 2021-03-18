import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Login from "./Views/Login/Login";
import Password from "./Views/Password/Password";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/password" exact component={Password} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
