/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('/api/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState({ users });
      });
  }

  render() {
    return (
      <ul>
        {
          this.state.users.map((user) => (
            <li>
              Username:
              {' '}
              {user.username}
              , Age:
              {' '}
              {user.age}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Users;
