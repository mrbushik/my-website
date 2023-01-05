import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./Components/navigation/navBar";
import MainPage from "./Components/pages/mainPage";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
