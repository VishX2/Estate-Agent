export default function Favourites({ favourites, removeFav, clearFavs }) {
  return (
    <div>
      <h2>Favourites</h2>

      {favourites.length === 0 && <p>No favourites added.</p>}

      {favourites.map((p) => (
        <div
          key={p.id}
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "12px",
            borderBottom: "1px solid #eee",
            paddingBottom: "10px"
          }}
        >
          {/* IMAGE */}
          <img
            src={p.picture}
            alt={p.location}
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              borderRadius: "6px"
            }}
          />

          {/* DETAILS */}
          <div style={{ flex: 1 }}>
            <p style={{ margin: "0 0 6px 0", fontSize: "14px" }}>
              {p.location}
            </p>

            <button onClick={() => removeFav(p.id)}>
              Remove
            </button>
          </div>
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
