/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

function CreatePoll() {
  const [title, setTitle] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [option5, setOption5] = useState('');
  const [option6, setOption6] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('http://localhost:1234/api/poll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{
        title,
        option1,
        option2,
        option3,
        option4,
        option5,
        option6,
      }]),
    });
    setOption1('');
    setOption2('');
    setOption3('');
    setOption4('');
    setOption5('');
    setOption6('');
    setTitle('');
  };

  return (
    <div id="createPollContainer">
      <form onSubmit={handleSubmit} id="createPoll">
        <div id="createPollInstructions">
          Create a new Franler poll!
        </div>
        <input
          className="createPollInput"
          type="text"
          value={title}
          placeholder="Poll Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="createPollInput"
          type="text"
          value={option1}
          placeholder="First Option (Required)"
          onChange={(e) => setOption1(e.target.value)}
        />
        <input
          className="createPollInput"
          type="text"
          value={option2}
          placeholder="Second Option (Required)"
          onChange={(e) => setOption2(e.target.value)}
        />
        <input
          className="createPollInput"
          type="text"
          value={option3}
          placeholder="Third Option"
          onChange={(e) => setOption3(e.target.value)}
        />
        <input
          className="createPollInput"
          type="text"
          value={option4}
          placeholder="Fourth Option"
          onChange={(e) => setOption4(e.target.value)}
        />
        <input
          className="createPollInput"
          type="text"
          value={option5}
          placeholder="Fifth Option"
          onChange={(e) => setOption5(e.target.value)}
        />
        <input
          className="createPollInput"
          type="text"
          value={option6}
          placeholder="Sixth Option"
          onChange={(e) => setOption6(e.target.value)}
        />
        <button id="createButton" type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreatePoll;
