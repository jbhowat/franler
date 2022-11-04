import React from "react";

function Header() {
  return (
    <div id="headerContainer">
      <input
          className="loginInput"
          type="text"
          placeholder="Username"
        />
        <input
          className="loginInput"
          type="password"
          placeholder="Password"
        />
        <button id="loginButton" type="submit">Login</button>
    </div>
  );
}

export default Header;
