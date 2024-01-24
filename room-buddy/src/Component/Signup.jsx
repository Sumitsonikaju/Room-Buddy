import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [gender, setGender] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // handle signup logic here
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <div className="signup-main-upper-div">
          <div className="signup-main-div">
            <h1 className="h1-signup">Signup</h1>
            <label>
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
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
            <label>
              Where are you looking?
              <input
                type="text"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </label>
            <label>
              Budget per month:
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </label>
            <label>
              I'm looking for:
              <select
                value={lookingFor}
                onChange={(e) => setLookingFor(e.target.value)}
              >
                <option value="">Select One</option>
                <option value="couple">As a couple</option>
                <option value="individual">For myself</option>
                <option value="group">As a group of friends</option>
              </select>
            </label>
            <label>
              Gender:
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select One</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <button type="submit">Create Profile</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
