/* eslint-disable import/extensions */
import React from 'react';
import Poll from './Poll.jsx';

function PollsDisplay() {
  const allPolls = [];
  for (let i = 0; i < 9; i++) {
    allPolls.push(<div className="pollCard">{Poll(i)}</div>);
  }
  return (
    <div id="pollContainer">
      {allPolls}
    </div>
  );
}

export default PollsDisplay;
