import './App.css';
import React from "react";
import { Reset } from "styled-reset";
import FrontPage from "./components/Frontpage/index"

function App() {
  return (
    <div>
      <Reset />
      <FrontPage />
    </div>
  );
}

export default App;
