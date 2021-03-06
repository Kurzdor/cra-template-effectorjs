import React from "react";
import { Counter } from './features/counter'
import logo from "./logo.svg";
import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://effector.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Effector
        </a>
      </header>
    </div>
  );
};
