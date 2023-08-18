import { IntroBgCircle } from "./IntroBgCircle";
import Headshot from "/images/headshot.png";

// eslint-disable-next-line no-unused-vars
import React from "react";

export const Intro = () => {
  return (
    <div id="intro" className="inner-content relative">
      <div className="vertical-line line blue center-absolute"></div>
      <div className="left">
        <IntroBgCircle />
        <div className="img-content">
          <img src={Headshot} id="headshot" alt="headshot" />
        </div>
      </div>
      <div className="right">
        <div className="text-content">
          <h2>I am passionate about web dev, creativity & tech.</h2>
          <div className="line horizontal-line blue"></div>
          {/* <p>
            I am an interactive designer and developer based in New Jersey,
            crafting engaging digital products and experiences. My expertise
            lies in design, development, and digital marketing, backed by a
            wealth of experience.
          </p> */}
          <p>
            Combining creativity, technical skills, and a constant drive to stay
            updated with emerging technologies, my profession enables me to
            craft visually appealing and engaging experiences.
          </p>
        </div>
      </div>
      <div className="vertical-line line blue "></div>
    </div>
  );
};
