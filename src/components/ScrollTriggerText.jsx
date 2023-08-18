// eslint-disable-next-line no-unused-vars
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WorkItem } from "./WorkItem";

gsap.registerPlugin(ScrollTrigger);
// GSAP TIMELINE EXAMPLE
// https://stackblitz.com/edit/react-6rzfpp?file=src%2Fviews%2FBoxes.js
export const ScrollTriggerTest = () => {
  const main = useRef();

  const desktopContentSectionRef = useRef();

  const [desktopContentHeight, setDesktopContentHeight] = useState(0);

  const [currentDescription, setCurrentDescription] = useState(null);

  const handleShowDescription = (description) => {
    console.log("before currente description");
    setCurrentDescription(description);

    // let tl = gsap.timeline();
    // tl.to(".desktopContentSection", {
    //   opacity: 0,
    //   visibility: "hidden",
    //   duration: 0.5,
    // });
    // tl.to(".desktopContentSection", {
    //   opacity: 100,
    //   visibility: "visible",
    //   duration: 0,
    //   onComplete: function () {
    //     setCurrentDescription(description);
    //   },
    // });
    // gsap.to(".desktopContentSection", { opacity: 0, duration: 5 });

    // setTimeout(() => {
    //   setCurrentDescription(description);
    //   console.log("after current description");
    // }, 500);
  };
  useLayoutEffect(() => {
    const updateDesktopContentHeight = () => {
      if (desktopContentSectionRef.current) {
        setDesktopContentHeight(desktopContentSectionRef.current.clientHeight);
      }
    };

    const resizeObserver = new ResizeObserver(updateDesktopContentHeight);
    if (desktopContentSectionRef.current) {
      resizeObserver.observe(desktopContentSectionRef.current);
      updateDesktopContentHeight();
    }

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: ".gallery",
          strart: "top top",
          end: "bottom bottom",
          pin: ".right",
        });
        return () => {
          // console.log("mobile");
        };
      });
    }, main); // <- Scope!
    return () => {
      resizeObserver.disconnect();
      ctx.revert();
    }; // <- Cleanup!
  }, [desktopContentHeight]); // Add desktopContentHeight as a dependency

  const workItemDescriptions = [
    "<p>Test description goes here</p>",
    "<p>2 Test description goes here</p>",
    "<p>2 Test description goes here</p>",
    "<p>2 Test description goes here</p>",
    "<p>2 Test description goes here</p>",
    "<p>2 Test description goes here</p>",
    "<p>2 Test description goes here</p>",
    "<p>2 Test description goes here</p>",
    "<p>2 Test description goes here</p>",
    "<p>2 Test description goes here</p>",
  ];

  return (
    <div id="work-scrolltrigger" ref={main}>
      <div className="gallery ">
        <div className="right">
          <div className="desktopPhotos text-content">
            <h2>Featured Work</h2>
            <p>
              Combining creativity, technical skills, and a constant drive to
              stay updated with emerging technologies, my profession enables me
              to craft visually appealing and engaging experiences.
            </p>

            <button
              className={!currentDescription ? "none" : "show"}
              onClick={() => handleShowDescription(null)}
            >
              GO BACK
            </button>
          </div>
        </div>
        <div className="left">
          {/* <div className="spacer"></div> */}
          <div className="desktopContent">
            <div
              className="desktopContentSection"
              ref={desktopContentSectionRef}
            >
              {currentDescription !== null && (
                <button onClick={() => handleShowDescription(null)}>
                  GO BACK
                </button>
              )}
              <WorkItem
                index="0"
                full
                image="tcnj-homepage.jpg"
                title="TCNJ Homepage"
                type="Development"
                timePeriod="2023"
                description={workItemDescriptions[0]}
                currentDescription={currentDescription}
                onClickShowDescription={handleShowDescription}
              />
              <WorkItem
                index="1"
                image="tcnj-homepage.jpg"
                title="TCNJ Homepage"
                type="Development"
                timePeriod="2023"
                description={workItemDescriptions[1]}
                currentDescription={currentDescription}
                onClickShowDescription={handleShowDescription}

                // onClick={() => handleShowDescription(1)}
              />
              <WorkItem
                index="2"
                image="tcnj-homepage.jpg"
                title="TCNJ Homepage"
                type="Development"
                timePeriod="2023"
                description={workItemDescriptions[1]}
                currentDescription={currentDescription}
                onClickShowDescription={handleShowDescription}

                // onClick={() => handleShowDescription(1)}
              />
              <WorkItem
                index="3"
                image="tcnj-homepage.jpg"
                title="TCNJ Homepage"
                type="Development"
                timePeriod="2023"
                description={workItemDescriptions[1]}
                currentDescription={currentDescription}
                onClickShowDescription={handleShowDescription}

                // onClick={() => handleShowDescription(1)}
              />
              <WorkItem
                index="4"
                image="tcnj-homepage.jpg"
                title="TCNJ Homepage"
                type="Development"
                timePeriod="2023"
                description={workItemDescriptions[1]}
                currentDescription={currentDescription}
                onClickShowDescription={handleShowDescription}

                // onClick={() => handleShowDescription(1)}
              />
              <WorkItem
                index="5"
                image="tcnj-homepage.jpg"
                title="TCNJ Homepage"
                type="Development"
                timePeriod="2023"
                description={workItemDescriptions[1]}
                currentDescription={currentDescription}
                onClickShowDescription={handleShowDescription}

                // onClick={() => handleShowDescription(1)}
              />
              <WorkItem
                index="6"
                image="tcnj-homepage.jpg"
                title="TCNJ Homepage"
                type="Development"
                timePeriod="2023"
                description={workItemDescriptions[1]}
                currentDescription={currentDescription}
                onClickShowDescription={handleShowDescription}

                // onClick={() => handleShowDescription(1)}
              />

              {/* <div className="spacer"></div>
              <div className="spacer"></div>
              <div className="spacer"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
