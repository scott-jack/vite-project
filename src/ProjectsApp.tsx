import { useState } from "react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectInfo from "./components/ProjectInfo";

function ProjectsApp() {
  let data = false;
  let plan = false;
  let spell = false;

  function selectData() {
    data = true;
    spell = false;
    plan = false;
  }
  function selectPlan() {
    data = false;
    spell = false;
    plan = true;
  }
  function selectSpell() {
    data = false;
    spell = true;
    plan = false;
  }

  const [alertVisible, setAlertVisibility] = useState(-1);

  return (
    <>
      <Navbar isHome={false} isAbout={false} isProjects={true}></Navbar>
      <div className="container px-4 py-5 my-5" id="featured-3">
        <h1 className="display-5 fw-bold text-body-emphasis text-center">
          Projects
        </h1>
        <div className="row g-5 py-4 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <img
              className="bi border shadow-lg rounded-3"
              src="../infodata.png"
              alt=""
              width="375"
              height="200"
            ></img>
            <div>
              <br></br>
            </div>
            <h3 className="fs-2 text-body-emphasis">Air Pollution Analysis</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <div className="d-flex align-items-center justify-content-evenly">
              <a
                href="https://github.com/zchen-66/info-final-proj"
                className="icon-link"
              >
                Github
              </a>
              <a
                href="https://zchen66.shinyapps.io/info-final-proj/"
                className="icon-link"
              >
                Website link
              </a>
              <Button
                color="secondary"
                onClick={() => (selectData(), setAlertVisibility(1))}
              >
                More Info
              </Button>
            </div>
          </div>
          <div className="feature col">
            <img
              className="bi border shadow-lg rounded-3"
              src="../planat.png"
              alt=""
              width="375"
              height="200"
            ></img>
            <div>
              <br></br>
            </div>
            <h3 className="fs-2 text-body-emphasis">PlanAt</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <div className="d-flex align-items-center justify-content-evenly">
              <a href="https://github.com/Plan-At" className="icon-link">
                Github
              </a>
              <a href="https://752628.xyz/" className="icon-link">
                Website link
              </a>
              <Button
                color="secondary"
                onClick={() => (selectPlan(), setAlertVisibility(2))}
              >
                More Info
              </Button>
            </div>
          </div>
          <div className="feature col">
            <img
              className="bi border shadow-lg rounded-3"
              src="../spellshocked.png"
              alt=""
              width="375"
              height="200"
            ></img>
            <div>
              <br></br>
            </div>
            <h3 className="fs-2 text-body-emphasis">SpellShocked</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <div className="d-flex align-items-center justify-content-evenly">
              <a
                href="https://github.com/SpellShocked/SpellShocked-Game/"
                className="icon-link"
              >
                Github
              </a>
              <a
                href="https://github.com/SpellShocked/SpellShocked-Game/blob/master/Document/Feature%20Spec.md"
                className="icon-link"
              >
                Feature Specification
              </a>
              <Button color="secondary" onClick={() => setAlertVisibility(3)}>
                More Info
              </Button>
            </div>
          </div>
        </div>
        {alertVisible === 1 && (
          <ProjectInfo
            isData={true}
            isPlanAt={false}
            isSpellShocked={false}
          ></ProjectInfo>
        )}
        {alertVisible === 2 && (
          <ProjectInfo
            isData={false}
            isPlanAt={true}
            isSpellShocked={false}
          ></ProjectInfo>
        )}
        {alertVisible === 3 && (
          <ProjectInfo
            isData={false}
            isPlanAt={false}
            isSpellShocked={true}
          ></ProjectInfo>
        )}
      </div>
      <Footer isShort={false}></Footer>
    </>
  );
}

export default ProjectsApp;
