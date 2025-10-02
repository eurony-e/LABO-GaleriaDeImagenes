import "./styles.css";
import React, { useEffect, useState } from "react";

function Galeria() {
  const [imagenes, setImagenes] = useState([]);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=25")
      .then((res) => res.json())
      .then((data) => setImagenes(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>GALERIA DE IMAGENES</h2>
      <div style={{}}>
        {imagenes.map((img) => (
          <div key={img.id} style={{ textAlign: "center" }}>
            <img
              src={img.download_url}
              alt={img.author}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p>{img.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Galeria;

