import React from "react";
import "./App.css";
import Header from './components/Header';
import Data from './Data';

function App() {
  return (
    <div className="App">
      <Header resumeData={Data} />
    </div>
  );
}

export default App;
