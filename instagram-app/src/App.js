import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";

function App() {
  return (
    <div className="App">
      <SearchBarContainer text="Instagram" />
    </div>
  );
}

export default App;
