import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";

function App() {
  return (
    <div className="App">
      <h1>Read</h1>
      <SearchBarContainer />
    </div>
  );
}

export default App;
