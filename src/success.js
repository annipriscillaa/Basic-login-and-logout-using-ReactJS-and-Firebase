import React from "react";
import { logOut } from "./firebase1";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div>
      the submission was successful
      <div>
        <Link to="/welcome">
          <button onClick={() => logOut()}>LogOut</button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
