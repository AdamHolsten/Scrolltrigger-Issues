// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import { WorkItemFinal } from "./WorkItemFinal";
import Popup from "./Popup";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// GSAP TIMELINE EXAMPLE
// https://stackblitz.com/edit/react-6rzfpp?file=src%2Fviews%2FBoxes.js
export const WorkContainer = () => {
  const [popupStatus, setPopupStatus] = useState(false);
  const [popupId, setPopupId] = useState(3);

  let component = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pin featured work text
      ScrollTrigger.create({
        trigger: "#featured-work-text",
        start: "top top",
        end: "bottom 60px",
        pin: true,
        markers: true,
        anticipatePin: 1,
      });

      const videos = gsap.utils.toArray("video");

      videos.forEach(function (video) {
        ScrollTrigger.create({
          trigger: video,
          // scroller: ".appVideos",
          start: "top 65%",
          end: "bottom 0",
          // markers: true,
          onEnter: () => video.play(),
          onEnterBack: () => video.play(),
          onLeave: () => video.pause(),
          onLeaveBack: () => video.pause(),
        });
      });
    }, component); // <- selector scoping
    return () => ctx.revert();
  }, []);
  // const [popupData, setPopupData] = useState(null);

  const popupData = [
    {
      id: 0,
      title: "Heading One",
      type: "Type One",
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      timePeriod: "2023",
      image: "test-video",
      publicLink: "https://google.com/",
      video: true,
      full: true,
    },
    {
      id: 1,
      title: "Heading One",
      type: "Type One",
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      timePeriod: "2023",
      image: "test-video",
      publicLink: "https://google.com/",
      video: false,
      full: false,
    },
    {
      id: 2,
      title: "Heading One",
      type: "Type One",
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      timePeriod: "2023",
      image: "test-video",
      publicLink: "https://google.com/",
      video: true,
      full: false,
    },
    {
      id: 3,
      title: "Heading One",
      type: "Type One",
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      timePeriod: "2023",
      image: "test-video",
      publicLink: "https://google.com/",
      video: false,
      full: false,
    },
    {
      id: 4,
      title: "Heading One",
      type: "Type One",
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      timePeriod: "2023",
      image: "test-video",
      publicLink: "https://google.com/",
      video: true,
      full: false,
    },
    {
      id: 5,
      title: "Heading One",
      type: "Type One",
      description:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      timePeriod: "2023",
      image: "test-video",
      publicLink: "https://google.com/",
      video: false,
      full: true,
    },
  ];

  const handlePopupStatusChange = (newStatus) => {
    setPopupStatus(newStatus);
  };
  // const testConsole = (numb) => {
  //   console.log(numb);
  // };
  const handleContentAreaClick = (popupNumber) => {
    setPopupStatus(true); // Set popupStatus to true
    setPopupId(popupNumber); // Set popupId to 1
  };
  return (
    <>
      <div id="work-container" ref={component}>
        <div className="p100 t-round"></div>
        <div className="gallery">
          <div id="featured-work-text" className="text-content">
            <h2>Heading Goes Here</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            {/* 
            <button
            className={!currentDescription ? "none" : "show"}
            onClick={() => handleShowDescription(null)}
            >
            GO BACK
        </button> */}
          </div>
          <div id="work-list">
            {popupData.map((item) => (
              <WorkItemFinal
                index={item.id} // Make sure to provide a unique key for each component
                key={item.id} // Make sure to provide a unique key for each component
                title={item.title}
                type={item.type}
                full={item.full}
                description={item.description}
                timePeriod={item.timePeriod}
                image={item.image}
                video={item.video}
                clickAction={handleContentAreaClick}
              />
            ))}
          </div>
        </div>
        <div className="p100 b-round"></div>
        {/* Empty Popup */}
      </div>
      {popupStatus && (
        <Popup
          onStatusChange={handlePopupStatusChange}
          popupId={popupId}
          popupContent={popupData}
        />
      )}
    </>
  );
};
