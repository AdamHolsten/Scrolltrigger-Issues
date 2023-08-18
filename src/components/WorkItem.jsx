/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export const WorkItem = ({
  index,
  image,
  video,
  full,
  title,
  type,
  timePeriod,
  description,
  currentDescription,
  clickAction,
}) => {
  const boxClass =
    full || currentDescription ? "work-item" : "work-item half-item";

  return (
    <div className={boxClass} onClick={() => clickAction(index)}>
      {currentDescription === null && (
        <div className={full ? `full-width` : "half-width"}>
          <div className="image-container">
            <img src={`/images/${image}`} alt={title} />
          </div>
          <div className="labels">
            <div className="title-and-type">
              <h3>{title}</h3>
              <p>{type}</p>
            </div>
            <div className="time-period">
              <p>{timePeriod}</p>
            </div>
          </div>
        </div>
      )}
      {currentDescription === index && (
        <div
          className={currentDescription && `full-width`}
          id="current-item"
          //   style={{ opacity: 0 }}
        >
          <div className="image-container">
            <img src={`/images/${image}`} alt={title} />
          </div>
          <div className="labels">
            <div className="title-and-type">
              <h3>{title}</h3>
              <p>{type}</p>
            </div>
            <div className="time-period">
              <p>{timePeriod}</p>
            </div>
          </div>
          <div className="description">
            <hr />

            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
