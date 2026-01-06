import { useParams } from "react-router-dom";
import data from "../data/properties.json";

export default function PropertyPage() {
  const { id } = useParams();
  const property = data.properties.find(p => p.id === id);

  if (!property) return <p>Not found</p>;

  return (
    <div>
      <h1>{property.location}</h1>
      <p>{property.description}</p>
    </div>
  );
}
