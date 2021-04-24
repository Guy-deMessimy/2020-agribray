import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import FrontPage from "./components/Frontpage/index";
import Header from "./components/Navbar/Header";

function App() {
  return (
    <>
      <Reset />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={FrontPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
