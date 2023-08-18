/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
// import DOMPurify from "dompurify";
import { CloseIcon } from "./CloseIcon";

const Popup = ({ onStatusChange, popupContent, popupId }) => {
  // useEffect hook to handle outside click
  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       const popupContainer = document.querySelector(".popup-container");
  //       const popup = document.querySelector(".popup");
  //       if (popup && !popup.contains(event.target)) {
  //         // Click occurred outside the Popup component
  //         onStatusChange(false);
  //         popupContainer.classList.toggle("no-click");
  //         console.log("test");
  //       }
  //     };

  //     // Add click event listener when component mounts
  //     document.addEventListener("click", handleClickOutside);

  //     // Clean up by removing the click event listener when component unmounts
  //     return () => {
  //       document.removeEventListener("click", handleClickOutside);
  //     };
  //   }, []);\

  const keyupEventListener = (event) => {
    if (event.keyCode === 27) {
      // The escape key was pressed
      // Perform your desired actions here
      // console.log("escape clicked");
      onStatusChange(false);
    }
  };

  useEffect(() => {
    // This function will be executed when the component is mounted or rendered for the first time
    // console.log("Component mounted");
    document.addEventListener("keyup", keyupEventListener);

    // You can perform any other actions or call other functions here
    // ...
  });
  // Filter popupContent based on popupId
  //   const newPopupContent = popupContent.filter(
  //     (obj) => obj.acf.popup_name == popupId
  //     );
  const newPopupContent = popupContent;

  // Log the filtered popupContent
  //   console.log(newPopupContent);

  // Close button click handler
  const handleClose = () => {
    document.removeEventListener("keyup", keyupEventListener);

    onStatusChange(false);
  };

  //   FIX LATER
  //   const sanitizedContent = DOMPurify.sanitize(newPopupContent[0].acf.content);

  const closeSideNav = (event) => {
    // console.log(event);
    // function(event){
    //   console.log(event)
    // }
    const isOutside = !event.target.closest(".popup");
    // // console.log(isOutside)
    if (isOutside) {
      // slider.classList.remove("open");
      document.removeEventListener("keyup", keyupEventListener);

      onStatusChange(false);

      // document.removeEventListener("keyup", keyupEventListener);
    }
  };
  const video = newPopupContent[popupId].video;
  const image = newPopupContent[popupId].image;
  const title = newPopupContent[popupId].title;
  return (
    <>
      {newPopupContent && (
        <div className="popup-container" onClick={closeSideNav}>
          <div className="popup">
            <span id="close-button" onClick={handleClose}>
              {/* <img src="/icons/close-icon.svg" alt="close" /> */}
              <CloseIcon />
            </span>
            <div className="popup-content">
              {video && (
                <video
                  src={`/projects/${image}/${image}.mp4`}
                  alt={title}
                  autoPlay
                  muted
                  loop
                ></video>
              )}
              <h2>{newPopupContent[popupId].title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: newPopupContent[popupId].description,
                }}
              ></div>
              {newPopupContent[popupId].publicLink && (
                <a
                  target="_blank"
                  href={newPopupContent[popupId].publicLink}
                  rel="noreferrer"
                >
                  View site
                </a>
              )}
              {/* <div
                className="popup-inner"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
