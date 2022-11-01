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
      <ul id="users">
        {
          this.state.users.map((user) => (
            <li>
              Username:
              {user.username}
              ,
              First Name:
              {user.firstname}
              ,
              Last Name:
              {' '}
              {user.lastname}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Users;
