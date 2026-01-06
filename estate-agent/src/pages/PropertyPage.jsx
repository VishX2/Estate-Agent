import { useParams, Link } from "react-router-dom";
import data from "../data/properties.json";

export default function PropertyPage() {
  const { id } = useParams();
  const property = data.properties.find((p) => p.id === id);

  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back to Search</Link>

      <h1>{property.location}</h1>

      <img
        src={property.picture}
        alt={property.location}
        style={{ width: "400px", marginBottom: "16px" }}
      />

      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>

      <p style={{ marginTop: "16px" }}>{property.description}</p>
    </div>
  );
}
