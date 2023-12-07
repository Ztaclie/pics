import React from "react";

function ImageShow({ key, image }) {
  const imageShowStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "300px",
    height: "200px",
  };

  return (
    <div className="ImageShow" style={imageShowStyle}>
      <img
        style={{ width: "100%", height: "100%" }}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageShow;
