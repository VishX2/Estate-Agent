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
    <div className="page">
      <h1>Search Page</h1>

      <SearchForm onSearch={setFilters} />

      {/* 🔑 THIS WRAPPER WAS MISSING */}
      <div className="search-layout">

        {/* 🔑 GRID WRAPPER WAS MISSING */}
        <div className="property-grid">
          {filteredProperties.map((p) => (
            <div key={p.id} className="property-card">
              <img src={p.picture} alt={p.location} />

              <div className="property-content">
                <h3>£{p.price.toLocaleString()}</h3>
                <p>{p.location}</p>
                <p>{p.bedrooms} bedrooms · {p.type}</p>

                <div className="property-actions">
                  <button onClick={() => navigate(`/property/${p.id}`)}>
                    View Details
                  </button>

                  <button onClick={() => addToFav(p)}>
                    ❤️ Favourite
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAVOURITES SIDEBAR */}
        <div className="favourites">
          <Favourites
            favourites={favourites}
            removeFav={removeFav}
            clearFavs={clearFavs}
          />
        </div>

      </div>
    </div>
  );
}
