import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import FrontPage from "./components/Frontpage/index";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Reset />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={FrontPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
