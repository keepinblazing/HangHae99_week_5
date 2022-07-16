import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Mainpage from "./MainPage";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
    <>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact>
            <Mainpage />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
