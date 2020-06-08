import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <li className="waves-effect waves-light">
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li className="waves-effect waves-light">
        <NavLink to="/signin">Login</NavLink>
      </li>
    </div>
  );
};

export default SignedOutLinks;
