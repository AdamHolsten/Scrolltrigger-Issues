/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export const WorkItemFinal = ({
  index,
  image,
  // eslint-disable-next-line no-unused-vars
  video,
  full,
  title,
  type,
  timePeriod,
  // eslint-disable-next-line no-unused-vars
  description,
  currentDescription,
  clickAction,
}) => {
  const boxClass =
    full || currentDescription ? "work-item" : "work-item half-item";

  // eslint-disable-next-line no-undef
  // const publicPath = import.meta.env.VITE_PUBLIC_PATH;

  return (
    <div className={boxClass} onClick={() => clickAction(index)}>
      <div className={full ? `full-width` : "half-width"}>
        <div className="image-container">
          {video ? (
            <video
              src={`/projects/${image}/${image}.mp4`}
              // src={`${publicPath}/projects/${image}/${image}.mp4`}
              alt={title}
              // autoPlay
              muted
              loop
            />
          ) : (
            <img
              src={`/projects/${image}/${image}.jpg`}
              // src={`${publicPath}/projects/${image}/${image}.jpg`}
              alt={title}
            />
          )}
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
    </div>
  );
};
