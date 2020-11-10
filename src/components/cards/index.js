import React from "react";

const Card = ({
  src,
  alt,
  desc,
  heights = "100%",
  title,
  vit = "initial",
  ...rest
}) => {
  return (
    <div class="card mb-3" {...rest}>
      <img
        style={{ width: "100%", height: heights, objectFit: vit }}
        class="card-img-top img-thumbnail"
        src={src}
        alt={alt}
      />
      <div class="card-body">
        <h5 className="card-title">{title}</h5>
        <p class="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
