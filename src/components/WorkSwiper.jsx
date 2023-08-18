// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import SlideImage from "/images/slide-1.png";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export const WorkSwiper = () => {
  // const space = "10";
  const [leftOffset, setLeftOffset] = useState(0); // Initialize the state variable with 0

  useEffect(() => {
    function getOffsetLeft() {
      const divElement = document.querySelector("#work .inner-content");
      const rect = divElement.getBoundingClientRect();
      const offset = rect.left;
      // console.log(offset);
      setLeftOffset(offset);
    }

    getOffsetLeft(); // Call the function to calculate and log the space

    // Optionally, you can add an event listener to recalculate the space if the window is resized
    function handleResize() {
      getOffsetLeft();
    }

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  useEffect(() => {
    // const swiperEl = document.querySelector(".swiper-container");

    // function handleSwiperProgress(event) {
    //   const [swiper, progress] = event.detail;
    //   console.log("Swiper progress:", progress);
    // }

    // function handleSlideChange() {
    //   console.log("Slide changed");
    // }

    // swiperEl.addEventListener("swiper-progress", handleSwiperProgress);
    // swiperEl.addEventListener("swiper-slidechange", handleSlideChange);

    // return () => {
    //   swiperEl.removeEventListener("swiper-progress", handleSwiperProgress);
    //   swiperEl.removeEventListener("swiper-slidechange", handleSlideChange);
    // };

    const swiperEl = document.querySelector("swiper-container");

    swiperEl.addEventListener("progress", (event) => {
      const [swiper, progress] = event.detail;
      const stringSwiper = toString(swiper);
      // console.log("Swiper: " + stringSwiper, "Progress: " + progress);
    });

    swiperEl.addEventListener("slidechange", (event) => {
      // console.log("slide changed", event);
    });
  }, []);
  // const portfolioUrl = "https://adamholsten.com/port-2023";
  // The rest of your JSX remains unchanged

  return (
    <div id="work">
      <div className="inner-content ">
        <div className="inner-padding">
          <h2 className="">Work</h2>
          <div className="line horizontal-line white"></div>
        </div>
      </div>
      <swiper-container
        class="swiper-container"
        id="work-slider"
        style={{ marginLeft: `${leftOffset}px` }} // slides-per-view="2"
        width="350"
        speed="500"
        loop="false"
        keyboard-control="true"
        allow-touch-move="true"
        // slides-per-view="auto"
        space-between="10"

        // slides-offset-before={leftOffset}
      >
        <swiper-slide>
          <a href="#">
            <img src={SlideImage} alt="Image 1" />
            {/* <video src="/videos/jamie-and-adam.mp4" autoPlay muted /> */}
            <div className="text-content">
              <h3>Jamie and Adam</h3>
              <p>Design & Development</p>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <img
            src={import.meta.env.VITE_PUBLIC_PATH + `/images/slide-1.png`}
            alt="Image 1"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src={import.meta.env.VITE_PUBLIC_PATH + `/images/slide-1.png`}
            alt="Image 1"
          />
        </swiper-slide>
      </swiper-container>
      {/* test */}
    </div>
  );
};
