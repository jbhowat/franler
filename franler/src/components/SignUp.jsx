/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const teststring = 'hello from React';

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = fetch('http://localhost:1234/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{
        username,
        password,
        firstname,
        lastname,
      }]),
    });
    let resJSON = await res.JSON();
    if (res.status === 200) {
      setUsername('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setMessage('User created successfully');
    } else {
      setMessage('Some error occured');
    }
  };

  return (
    <div id="signup">
      Create Franler Account:
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          value={firstname}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastname}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default SignUp;
