import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="login-main-upper-div">
          <div className="login-main-div">
            <h1 className="h1-login">Login</h1>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Login</button>
            <button type="submit" style={{ marginBottom: "-5px" }}>Sign-Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
