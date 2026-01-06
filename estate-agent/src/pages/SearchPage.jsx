import { useNavigate } from "react-router-dom";
import data from "../data/properties.json";

export default function SearchPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Page</h1>

      {data.properties.map((p) => (
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
