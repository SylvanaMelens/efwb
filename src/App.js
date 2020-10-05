import React from "react";
import "./App.css";

import Cards from "./components/Cards";
import Informations from "./pages/Informations";
import Activities from "./pages/Activities";
import Meals from "./pages/Meals";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Cards />
      </div>
      <Activities />
      <Meals />
      <Informations />
    </div>
  );
}

export default App;
