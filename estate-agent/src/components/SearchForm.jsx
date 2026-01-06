import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [postcode, setPostcode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSearch({
      type,
      minPrice,
      maxPrice,
      bedrooms,
      postcode
    });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Any Type</option>
        <option value="House">House</option>
        <option value="Flat">Flat</option>
      </select>

      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Bedrooms"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
      />

      <input
        type="text"
        placeholder="Postcode (e.g. BR5)"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}
