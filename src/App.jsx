import "./App.css";

import SkillsWrapper from "./components/SkillsWrapper";
import { WorkContainer } from "./components/WorkContainer";
// import { WorkSwiper } from "./components/WorkSwiper";
// import { Work } from "./components/Work";

function App() {
  return (
    <div id="portfolio">
      <WorkContainer />
      <SkillsWrapper />
    </div>
  );
}

export default App;
