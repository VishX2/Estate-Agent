export default function Favourites({ favourites, removeFav, clearFavs }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Favourites</h2>

      {favourites.length === 0 && <p>No favourites added.</p>}

      {favourites.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            padding: "8px",
            marginBottom: "8px"
          }}
        >
          <p>{p.location}</p>
          <button onClick={() => removeFav(p.id)}>Remove</button>
        </div>
      ))}

      {favourites.length > 0 && (
        <button onClick={clearFavs} style={{ marginTop: "10px" }}>
          Clear All
        </button>
      )}
    </div>
  );
}
