import { useState } from "react";

export default function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      {/* MAIN IMAGE */}
      <img
        src={mainImage}
        alt="Property"
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "12px"
        }}
      />

      {/* THUMBNAILS */}
      <div style={{ display: "flex", gap: "10px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            onClick={() => setMainImage(img)}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              cursor: "pointer",
              borderRadius: "6px",
              border:
                mainImage === img
                  ? "2px solid #0b3a75"
                  : "1px solid #ccc"
            }}
          />
        ))}
      </div>
    </div>
  );
}
