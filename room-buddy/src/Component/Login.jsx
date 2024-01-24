import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
      navigate("/signup")
  }; 
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="login-main-upper-div">
          <div className="login-main-div">
            <h1 className="h1-login">Login</h1>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </label>
            <button type="submit">Login</button>
            <button type="button" style={{ marginBottom: "-5px" }} onClick={handleSignUp}>
              Sign-Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
