import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./Components/navigation/navBar";
import MainPage from "./Components/pages/mainPage";
import ResumePage from "./Components/pages/resumePage";
import ContactPage from "./Components/pages/contactPage";
import ExamplesPage from "./Components/pages/examplesPage";
import ExampleItemPage from "./Components/pages/exampleItemPage";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/my-works/:Id" component={ExampleItemPage} />
        <Route exact path="/my-works" component={ExamplesPage} />
        <Route exact path="/contacts" component={ContactPage} />
        <Route exact path="/resume" component={ResumePage} />
        <Route path="/" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
