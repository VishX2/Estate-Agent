import { useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../data/properties.json";
import SearchForm from "../components/SearchForm";

export default function SearchPage() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({});

  const filteredProperties = data.properties.filter((p) => {
    return (
      (!filters.type || p.type === filters.type) &&
      (!filters.minPrice || p.price >= Number(filters.minPrice)) &&
      (!filters.maxPrice || p.price <= Number(filters.maxPrice)) &&
      (!filters.bedrooms || p.bedrooms >= Number(filters.bedrooms)) &&
      (!filters.postcode ||
        p.location.toUpperCase().includes(filters.postcode.toUpperCase()))
    );
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Page</h1>

      <SearchForm onSearch={setFilters} />

      {filteredProperties.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            marginBottom: "12px"
          }}
        >
          <img
            src={p.picture}
            alt={p.location}
            style={{ width: "200px", display: "block", marginBottom: "8px" }}
          />

          <p><strong>{p.location}</strong></p>
          <p>£{p.price.toLocaleString()}</p>
          <p>{p.bedrooms} bedrooms · {p.type}</p>

          <button onClick={() => navigate(`/property/${p.id}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
