import React from "react";
import {Link} from "react-router-dom";

export function Navigation () {


  return(
      <header>
        <div className="header">
          <Link className="link" to="/">
            <h2 className="link">Planet list</h2>
          </Link>
          <Link className="link" to="/sike">
            <h2>Voting statistics</h2>
          </Link>
          <Link className="link" to="/registration">
            <h2>Registration</h2>
          </Link>
          <Link className="link" to="/login">
            <h2>Login</h2>
          </Link>
          <Link className="link" to="/sike">
            <h2>Logout</h2>
          </Link>
        </div>
        <div className="sign">
          <Link className="link" to="/sike">
            <h2>Sign in</h2>
          </Link>
        </div>
      </header>
  );
}