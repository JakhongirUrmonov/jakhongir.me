import React from "react";
import Waves from "../UI/Waves";
import aboutImg from "../../assets/images/aboutme.png";
import Skill from "../UI/Skill";

function AboutMe() {
  return (
    <>
      <Waves id="about" position="top" />
      <section className="about-me">
        <div className="container">
          <div className="title">
            <h2>About me</h2>
            <p>
              Vestibulum pretium commodo porttitor. In sit amet vehicula lorem.
              Nulla facilisi. Proin ut neque eget urna ultrices rutrum eu vitae
              enim.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="about-me-content">
            <div>
              <h3>Skills gained during all the time of my work</h3>
              <p className="about-me-text">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. A small river named Duden
                flows by their place and supplies it with the necessary
                regelialia.Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean. A small river
                named Duden flows by their place and supplies it with the
                necessary regelialia.
              </p>
            </div>
            <div>
              <img src={aboutImg} alt={aboutImg} />
            </div>
            <div className="skills">
              <Skill skill="Javascript" percentage={95} />
              <Skill skill="Javascript" percentage={95} />
              <Skill skill="Javascript" percentage={95} />
              <Skill skill="Javascript" percentage={95} />
            </div>
            <div className="skills">
              <Skill skill="Javascript" percentage={95} />
              <Skill skill="Javascript" percentage={95} />
              <Skill skill="Javascript" percentage={95} />
              <Skill skill="Javascript" percentage={95} />
            </div>
          </div>
        </div>
      </section>
      <Waves />
    </>
  );
}

export default AboutMe;
