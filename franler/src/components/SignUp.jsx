/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:1234/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
          firstname,
          lastname,
        }),
      });
      const resJSON = await res.json();
      if (res.status === 200) {
        setUsername('');
        setFirstName('');
        setLastName('');
        setMessage('User created successfully');
      } else {
        setMessage('An error occured!');
      }
    } catch (err) {
      console.log(err);
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
