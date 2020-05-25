import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header'

const sections = [
  { title: 'CV', url: 'https://mattborghi.github.io/CV' },
  { title: 'Blog', url: 'https://mattborghi.github.io/blog' },
  { title: 'Projects', url: '#' },
  { title: 'French', url: '#' },
  { title: 'Violin', url: '#' },
];

function App() {
  return (
    <div className="App">
      <Header title="Matias Borghi" sections={sections} />
       {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header>  */}
    </div>
  );
}

export default App;
