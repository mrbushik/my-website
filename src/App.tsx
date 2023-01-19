import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./Components/navigation/navBar";
import MainPage from "./Components/pages/mainPage";
import ResumePage from "./Components/pages/resumePage";
import ContactPage from "./Components/pages/contactPage";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/contacts" component={ContactPage} />
        <Route exact path="/resume" component={ResumePage} />
        <Route path="/" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
