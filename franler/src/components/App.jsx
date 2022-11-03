/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import CreatePoll from './CreatePoll.jsx';
import PollsDisplay from './PollsDisplay.jsx';

const logo = require('./logo.png');

function App() {
  return (
    <div>
      <div id="headerLogo">
        <img src="{logo}" alt="franler logo" />
      </div>
      <div>
        <CreatePoll />
      </div>
      <div>
        <PollsDisplay />
      </div>
    </div>
  );
}

export default App;
