import React from "react";
import "./App.css";
import Header from './components/Header';
import Data, {buttons} from './Data';

function App() {
  return (
    <div className="App">
      <Header resumeData={Data} buttons={buttons} />
    </div>
  );
}

export default App;
