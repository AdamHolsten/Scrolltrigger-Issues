// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { ReactComponent as BgHero } from "/src/assets/trianglify-export.svg";
import { LogoWhite } from "./LogoWhite";
export const Hero = () => {
  const originalWidth = 1920;
  const originalHeight = 1080;
  const aspectRatio = originalWidth / originalHeight;

  // State to store the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update the window width when the window is resized
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Attach event listener on component mount and remove it on unmount
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="hero">
      <div id="header-and-dek">
        {/* <h1>Holsten</h1> */}
        <h1>
          <LogoWhite />
        </h1>
        <p>design & development</p>
      </div>
      <div className="vertical-line line white"></div>
      <div className="border gsap">
        <div className="gradient-overlay"></div>
        <div id="svg-container" style={{ width: windowWidth, aspectRatio }}>
          <BgHero
            width="100%"
            height="100%"
            viewBox={`0 0 ${originalWidth} ${originalHeight}`}
          />
        </div>
      </div>
      {/* <BgImageHero /> */}
    </div>
  );
};
