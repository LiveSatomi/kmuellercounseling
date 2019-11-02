import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
        <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/LiveSatomi/jackomueller"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </header>
    </div>
  );
};

export default App;
