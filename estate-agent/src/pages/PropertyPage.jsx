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
      <p>Price: £{property.price}</p>
      <p>{property.description}</p>
    </div>
  );
}
