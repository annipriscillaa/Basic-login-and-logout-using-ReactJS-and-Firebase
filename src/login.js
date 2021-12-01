import React from "react";
import {
  auth,
  db,
  withEmailAndPassword,
  registerWithEmailAndPassword,
} from "./firebase1";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  //   useEffect(() => {
  //     if (loading) return;
  //     if (user) history.replace("success/?email=" + email);
  //   }, [user, loading]);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/success?email=" + email);
  }, [user, loading]);

  return (
    <div>
      <div>
        <span>Enter your email:</span>
        <span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
      </div>
      <div>
        <span>Enter your password:</span>
        <span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>
      </div>
      <div>
        <button
          type="submit"
          onClick={() => signInWithEmailAndPassword(auth, email, password)}
        >
          LOGIN
        </button>
      </div>
      <div>
        no account?<Link to="/signUp">create account</Link>
      </div>
    </div>
  );
}

export default Login;
