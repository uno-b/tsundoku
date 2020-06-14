import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = (props) => {
  return (
    <div>
      <li>Flashcards</li>
      <li>Challenges</li>
      <li>Rewards</li>
      <li>Statistics</li>
      <li>Settings</li>
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
