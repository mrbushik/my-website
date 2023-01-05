import React from "react";
import NavBar from "./Components/navigation/navBar";

import { Route, Switch } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
import MainPage from "./Components/pages/mainPage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
