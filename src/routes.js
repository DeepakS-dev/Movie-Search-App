import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";

const AppRoutes = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/Movie-Search-App" element={<Login setUser={setUser} />} />
        <Route
          path="/search"
          element={user ? <Search user={user} /> : <Login setUser={setUser} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
