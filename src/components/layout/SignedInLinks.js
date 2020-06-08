import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = (props) => {
  return (
    <div>
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a href="/#">Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </div>
  );
};

export default SignedInLinks;
