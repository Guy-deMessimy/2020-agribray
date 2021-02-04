import React from "react";

const Services = ({ id, nature, image1 }) => {
  return (
    <div className="gameCard">
      <blockquote>{nature}</blockquote>
      <p>{nature}</p>
      <img src={image1} alt={nature} />
    </div>
  )
}

export default Services;
