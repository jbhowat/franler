/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import CreatePoll from './CreatePoll.jsx';
import PollsDisplay from './PollsDisplay.jsx';

function App() {
  return (
    <div>
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
