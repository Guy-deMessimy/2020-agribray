import React from "react";

const Works = ({ id, nature, image1 }) => {
  return (
    <div>
      <blockquote>{nature}</blockquote>
      <p>{nature}</p>
      <img src={image1} alt={nature} />
    </div>
  );
};

export default Works;
