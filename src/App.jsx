import "./App.css";

import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
// import { ItemList } from "./components/ItemList";
import { Menu } from "./components/Menu";
import { ScrollTriggerTest } from "./components/ScrollTriggerText";
import SkillsWrapper from "./components/SkillsWrapper";
import { WorkContainer } from "./components/WorkContainer";
// import { WorkSwiper } from "./components/WorkSwiper";
// import { Work } from "./components/Work";

function App() {
  return (
    <div id="portfolio">
      <Menu />
      <Hero />
      <Intro />
      {/* <ScrollTriggerTest /> */}
      {/* <Work /> */}
      {/* <WorkSwiper /> */}
      <WorkContainer />
      <SkillsWrapper />
      <div className="grey ten-px-inner ">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
