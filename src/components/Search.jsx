import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPlanets } from "../api";

const Search = ({ user }) => {
  const [query, setQuery] = useState("");
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [searchCount, setSearchCount] = useState(0);
  const [lastSearchTime, setLastSearchTime] = useState(Date.now());
  const navigate = useNavigate();

  useEffect(() => {
    const now = Date.now();
    if (now - lastSearchTime > 60000) {
      setSearchCount(0);
      setLastSearchTime(now);
    }
  }, [query]);

  useEffect(() => {
    if (!query) {
      setPlanets([]);
      setSelectedPlanet(null);
      return;
    }

    const debounceTimer = setTimeout(async () => {
      if (user.name === "Luke Skywalker" || searchCount < 15) {
        setSearchCount((prev) => prev + 1);
        const results = await fetchPlanets(query);
        setPlanets(results);
      } else {
        alert("Search limit exceeded! Please wait a minute.");
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
    setQuery(planet.name); // Set clicked planet name in input field
    setPlanets([]); // Hide suggestions after selection
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <div className="search-container">
        <h2>Search for Planets</h2>
        <input
          type="text"
          placeholder="Type to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Suggestion Dropdown */}
        {query && planets.length > 0 && (
          <ul className="suggestion-list">
            {planets.map((planet) => (
              <li key={planet.name} onClick={() => handlePlanetClick(planet)}>
                {planet.name}
              </li>
            ))}
          </ul>
        )}

        <div className="results">
          {selectedPlanet && (
            <div className="planet-details">
              <h2>Planet Details</h2>
              <p><strong>Name:</strong> {selectedPlanet.name}</p>
              <p><strong>Population:</strong> {selectedPlanet.population}</p>
              <p><strong>Climate:</strong> {selectedPlanet.climate}</p>
              <p><strong>Terrain:</strong> {selectedPlanet.terrain}</p>
              <p><strong>Gravity:</strong> {selectedPlanet.gravity}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
