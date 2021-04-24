import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import FrontPage from "./components/Frontpage/index";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer"
import SampleForm from'./pages/reduxForm/containers/form.container'

function App() {
  return (
    <>
      <Reset />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/services" component={SampleForm} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
