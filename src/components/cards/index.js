import React from "react";
import "./style.css";
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
    <div className="card mb-3" {...rest}>
      <img
        style={{
          height: heights,
          objectFit: vit,
          border: "none",
        }}
        className="card-img-top"
        src={src}
        alt={alt}
      />
      <div className="card-body">
        <h5 style={{ fontSize: "16pt" }} className="card-title">
          {title}
        </h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
