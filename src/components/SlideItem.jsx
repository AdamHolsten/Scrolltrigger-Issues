// SlideItem.js
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const SlideItem = ({ imageSrc, title, description, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={imageSrc} alt={title} />
      <div className="text-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SlideItem;
