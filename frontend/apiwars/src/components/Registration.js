import React from 'react';
import {Link} from "react-router-dom";

export function Registration() {
  return (
      <div id="allContainer">
        <div id="formContainer">
          <h1>Registration</h1>
          <label>Username: </label>
          <input type="text" placeholder="Username"></input>
          <label>Password: </label>
          <input type="password" placeholder="Password"></input>
          <Link className="link" to="/sike">
            <button>Register</button>
          </Link>
        </div>
      </div>
  )
}
