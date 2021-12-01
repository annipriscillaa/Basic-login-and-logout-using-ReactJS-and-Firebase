import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "./firebase1";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

function SignUp() {
  const [user_name, setUserName] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [user_phone, setUserPhone] = useState("");
  const [user_password, setUserPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, user_email, user_password).then(
      (cred) => {
        const user_id = cred.user.uid;
        setDoc(doc(db, "doc", user_id), {
          u_name: user_name,
          u_id: user_id,
          u_email: user_email,
          u_phone: user_phone,
          u_password: user_password,
        });
      }
    );
  };

  return (
    <div>
      <div>
        <span>Enter your name:</span>
        <span>
          <input
            type="text"
            value={user_name}
            onChange={(e) => setUserName(e.target.value)}
          />
        </span>
      </div>
      <div>
        <span>Enter your email:</span>
        <span>
          <input
            type="text"
            value={user_email}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </span>
      </div>
      <div>
        <span>Enter your phone:</span>
        <span>
          <input
            type="text"
            value={user_phone}
            onChange={(e) => setUserPhone(e.target.value)}
          />
        </span>
      </div>
      <div>
        <span>Enter your password:</span>
        <span>
          <input
            type="password"
            value={user_password}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </span>
      </div>
      <div>
        <Link to="/welcome">
          <button type="submit" onClick={signUp}>
            submit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
