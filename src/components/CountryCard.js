import React from "react";

function CountryCard({ country }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={country.flags.png}
        className="card-img-top"
        alt={country.name.common}
      />
      <div className="card-body">
        <h5 className="card-title">{country.name.common}</h5>
        <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default CountryCard;
