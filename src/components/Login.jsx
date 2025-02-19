import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCharacter } from "../api";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const characters = await fetchCharacter(username);
    if (characters.length > 0) {
      const user = characters.find((char) => char.birth_year === password);
      if (user) {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/search");
      } else {
        setError("Invalid username or password.");
      }
    } else {
      setError("User not found.");
    }
  };

  return (

    <>
    <div className="login-container">
      <h2> Login </h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
    </div>
    </>
  );
};

export default Login;
