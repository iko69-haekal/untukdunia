import React from "react";

const Card = ({ src, alt, desc, heights, title, vit = "initial", ...rest }) => {
  return (
    <div class="card mb-3" {...rest}>
      <img
        style={{ height: heights, objectFit: vit }}
        class="card-img-top"
        src={src}
        alt={alt}
      />
      <div class="card-body">
        <h4 className="card-title">{title}</h4>
        <p class="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
