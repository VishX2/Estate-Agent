import data from "../data/properties.json";

export default function SearchPage() {
  return (
    <div>
      <h1>Search Page</h1>

      {data.properties.map(p => (
        <div key={p.id}>
          <p>{p.location}</p>
          <p>£{p.price}</p>
        </div>
      ))}
    </div>
  );
}
