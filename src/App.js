import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login.js";
import SignUp from "./signUp.js";
import Success from "./success";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/welcome" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/success" component={Success} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
