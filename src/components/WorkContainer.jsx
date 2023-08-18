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
      title: "TCNJ Homepage",
      type: "Development",
      description:
        "<p>A website's homepage holds significant importance as it serves as the initial point of contact, establishing a crucial first impression and reflecting the brand's identity. It facilitates navigation, showcases key content, and guides user actions while contributing to SEO efforts and building trust with visitors.</p><p>The revamped TCNJ homepage launched features three engaging video profiles showcasing current TCNJ students and alumni. These videos, developed by the TCNJ Office of Communications, aim to attract prospective students by highlighting individuals with vibrant personalities and successful work experiences.</p><p>The technology stack of Vue 2 and GreenSock animations was employed to create an engaging user experience. The page incorporates an interactive pathways module, intuitively guiding users to relevant program information based on their preferences. Furthermore, a dynamic news feed pulls in the latest updates from TCNJ's WordPress news posts, ensuring the homepage remains current and informative.</p><p>The design of the page was by Lauren Kaplan.</p>",
      timePeriod: "2023",
      image: "tcnj-homepage",
      publicLink: "https://tcnj.edu/",
      video: true,
      full: true,
    },
    {
      id: 1,
      title: "NYU WIRELESS & CATT ",
      type: "Development",
      description: "This is a description of the TCNJ Homepage",
      timePeriod: "2023",
      image: "nyu-wireless",
      video: true,
      full: false,
    },
    {
      id: 2,
      title: "TCNJ Graduate Program Finder and Pages",
      type: "Development",
      description: "This is a description of the TCNJ graduate homepage",
      timePeriod: "2023",
      image: "graduate",
      video: false,
      full: false,
    },
    {
      id: 3,
      title: "TCNJ Interfolio ",
      type: "Development",
      description: "This is a description of the TCNJ Homepage",
      timePeriod: "2023",
      image: "tcnj-homepage",
      video: false,
      full: false,
    },

    {
      id: 4,
      title: "Henry Rader & Son",
      type: "Development",
      description: "This is a description of the TCNJ Homepage",
      timePeriod: "2023",
      image: "henry-rader",
      video: true,
      full: false,
    },
    {
      id: 5,
      title: "Jamie & Adam Wedding",
      type: "Development",
      description: "This is a description of the TCNJ Homepage",
      timePeriod: "2023",
      image: "wedding-site",
      video: true,
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
            <h2>Featured Work</h2>
            <p>
              Combining creativity, technical skills, and a constant drive to
              stay updated with emerging technologies, my profession enables me
              to craft visually appealing and engaging experiences.
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
