import { useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../data/properties.json";
import SearchForm from "../components/SearchForm";
import Favourites from "../components/Favourites";

export default function SearchPage() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({});
  const [favourites, setFavourites] = useState([]);

  function addToFav(property) {
    if (!favourites.find((f) => f.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  }

  function removeFav(id) {
    setFavourites(favourites.filter((f) => f.id !== id));
  }

  function clearFavs() {
    setFavourites([]);
  }

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
            style={{ width: "200px", display: "block" }}
          />

          <p><strong>{p.location}</strong></p>
          <p>£{p.price.toLocaleString()}</p>
          <p>{p.bedrooms} bedrooms · {p.type}</p>

          <button onClick={() => navigate(`/property/${p.id}`)}>
            View Details
          </button>

          <button
            onClick={() => addToFav(p)}
            style={{ marginLeft: "10px" }}
          >
            ❤️ Add to Favourites
          </button>
        </div>
      ))}

      <Favourites
        favourites={favourites}
        removeFav={removeFav}
        clearFavs={clearFavs}
      />
    </div>
  );
}
