/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import CreatePoll from './CreatePoll.jsx';
import PollsDisplay from './PollsDisplay.jsx';
import logo from './logo-no-background.png';

function App() {
  return (
    <div>
      <div id="topContainer">
        <div id="headerLogoContainer">
          <img id="headerLogo" src={logo} alt="testing" />
        </div>
        <CreatePoll />
      </div>
      <div>
        <PollsDisplay />
      </div>
    </div>
  );
}

export default App;
