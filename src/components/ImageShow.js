import React from "react";

function ImageShow({ key, image }) {
  return (
    <div className="ImageShow">
      <img src={image.urls.regular} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
