// SlideItem.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { ItemList } from "./ItemList";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const SkillsWrapper = () => {
  let component = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: "(max-width: 768px)",
          isMobile: "(min-width: 768px)",
        },
        (context) => {
          // eslint-disable-next-line no-unused-vars
          let isDesktop = context.isDesktop;

          // Sets Scrolltrigger pin for circle
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#circle-container",
              start: "top top",
              end: "+=100%",
              pin: isDesktop ? false : true,
              pinSpacing: false,
              toggleActions: "play none none reverse",
              anticipatePin: 1,

              markers: true,
            },
          });

          // Circle starts hidden
          tl.fromTo("#circle-wrap", { autoAlpha: 0 }, { autoAlpha: 1 }, 0);

          // Creates timeline
          let tlLine = gsap.timeline({
            scrollTrigger: {
              trigger: "ul",
              start: "top 60%",
            },
          });
          tlLine.fromTo(
            "#left-bar",
            { opacity: 0 },
            { opacity: 1, stagger: 0.25 },
            0
          );
          let circleHeaderTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#Technologies",
              // pin: true, // pin the trigger element while active
              start: "top 60%",
              // markers: true,
              toggleActions: "play none none reverse",
            },
          });
          gsap.set("#second-circle-header", { autoAlpha: 0, height: 0 });
          circleHeaderTl.to(
            "#first-circle-header",
            { autoAlpha: 0, opacity: 0, duration: 0.25 },
            0
          );
          circleHeaderTl.to(
            "#first-circle-header",
            { height: 0, duration: 0 },
            0.25
          );
          circleHeaderTl.fromTo(
            "#second-circle-header",
            { autoAlpha: 0, height: 0, y: 20 },
            { autoAlpha: 1, height: "initial", y: 0 },
            0.35
          );
        }
      );
    }, component); // <- selector scoping
    return () => ctx.revert();
  }, []);

  return (
    <div id="item-collection" className="inner-padding" ref={component}>
      <div>
        <div className="right-item-list">
          <hr id="left-bar" />

          <ItemList
            heading="Skills & Exp."
            items={[
              { item: "Item Title", exp: "Secondary Text" },
              { item: "Item Title", exp: "Secondary Text" },
              { item: "Item Title", exp: "Secondary Text" },
              { item: "Item Title", exp: "Secondary Text" },
            ]}
            resume
          />
          <ItemList
            heading="Technologies"
            items={[
              { item: "Item Title" },
              { item: "Item Title" },
              { item: "Item Title" },
              { item: "Item Title" },
              { item: "Item Title" },
              { item: "Item Title" },
              { item: "Item Title" },
              { item: "Item Title" },
              { item: "Item Title" },
            ]}
          />
        </div>
      </div>
      <div id="circle-container">
        <div id="circle-wrap" className=" full-height">
          <div id="skill-circle">
            <h2 id="first-circle-header">
              ONE: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do
            </h2>

            <h2 id="second-circle-header">
              TWO: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsWrapper;
