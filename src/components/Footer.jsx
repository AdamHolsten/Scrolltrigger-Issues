// eslint-disable-next-line no-unused-vars
import React from "react";
import { LogoGrey } from "./LogoGrey";

export const Footer = () => {
  const getCurrentYearAsString = () => {
    const currentYear = new Date().getFullYear();
    return currentYear.toString();
  };

  // Call the function to get the current year as a string
  const yearString = getCurrentYearAsString();

  return (
    <div id="footer">
      <h2>
        <LogoGrey />
      </h2>
      <p>
        development & design
        <br /> Copyright {yearString} {/* Display the yearString */}
      </p>
    </div>
  );
};
