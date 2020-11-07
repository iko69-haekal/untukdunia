import React from "react";

const Card = ({ src, alt, desc, ...rest }) => {
  return (
    <div class="card" {...rest}>
      <img
        style={{ height: "350px" }}
        class="card-img-top"
        src={src}
        alt={alt}
      />
      <div class="card-body">
        <p class="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
