import React from 'react';
import { Route } from 'react-router-dom';
import { HomePage } from '../pages';
import './app.css';

function App() {
  return (
    <div className="wrapper">
      <div className="content-outer">

        <Route path="/" component={HomePage} />

      </div>
    </div>
  );
}

export default App;
