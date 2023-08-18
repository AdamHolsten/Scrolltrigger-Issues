// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// eslint-disable-next-line react/prop-types
export const ItemList = ({ heading, items, resume }) => {
  //   console.log("Heading:" + heading);
  //   console.log("items:" + items);
  //   console.log("resume:" + resume);\

  let component = useRef();

  useEffect(() => {
    let scrollCtx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "ul",
          start: "top 60%", // when the top of the trigger hits the top of the viewport
        },
      });

      // tl.from(".work-item", { opacity: 0, stagger: 1 });
      tl.fromTo("h2", { opacity: 0 }, { opacity: 1, stagger: 0.25 }, 0);

      tl.fromTo(
        ".work-item",
        { opacity: 0 },
        { opacity: 1, stagger: 0.25 },
        0.5
      );
    }, component); // <- selector scoping
    return () => scrollCtx.revert();
  }, []);

  return (
    <div className="item-list" ref={component}>
      <h2 className="gsap-fade-up">
        <span>{heading}</span>
      </h2>
      <ul id={heading}>
        {items &&
          // eslint-disable-next-line react/prop-types
          items.map((item, index) => {
            const workExperience = item.exp;
            return (
              <li className="work-item gsap-fade-up" key={index + item.item}>
                {item.item}
                {workExperience && <p>{workExperience}</p>}
              </li>
            );
          })}
        {resume && (
          <li className="work-item gsap-fade-up">
            <a href="">Link Here</a>
          </li>
        )}
      </ul>
    </div>
  );
};
