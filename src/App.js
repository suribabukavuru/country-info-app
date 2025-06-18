import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./components/CountryCard";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInitialCountries();
  }, []);

  // Load first 12 countries on startup
  const fetchInitialCountries = () => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
        const limitedCountries = res.data.slice(0, 12);
        setCountries(limitedCountries);
        setError(null);
      })
      .catch(() => setError("Failed to fetch countries"));
  };

  const handleSearch = async () => {
    if (search.trim() === "") return;

    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${search.trim().toLowerCase()}?fullText=true`
      );
      setCountries(res.data);
      setError(null);
    } catch (err) {
      setCountries([]);
      setError("No country found. Try a valid country name.");
    }
  };

  return (
    <div className="app-container d-flex align-items-center justify-content-center text-white">
      <div className="container py-4">

        {/* Heading and Info */}
        <div className="text-center text-light mb-4">
          <h1 className="mb-2">🌍 Country Info App</h1>
          <p className="lead">
            Explore details of countries including their capital, population, region, and flags.
            Search by country name or browse a sample list below.
          </p>
          <p>
            Currently displaying <strong>{countries.length}</strong> {countries.length === 1 ? "country" : "countries"}.
          </p>
        </div>

        {/* Search Input */}
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Error */}
        {error && <p className="text-danger text-center">{error}</p>}

        {/* Country Cards */}
        <div className="row justify-content-center">
          {countries.map((country) => (
            <div key={country.cca3} className="col-md-4 mb-4">
              <CountryCard country={country} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
