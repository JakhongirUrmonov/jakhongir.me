import React from "react";
import Waves from "../UI/Waves";
import aboutImg from "../../assets/images/aboutme1.webp";
import Skill from "../UI/Skill";

function AboutMe() {
  return (
    <>
      <Waves position="top" />
      <section id="about" className="about-me">
        <div className="container">
          <div className="title">
            <h2>About me</h2>
            <p>
              A hardworking person who is attentive to details and focused on
              the quality of work. A good team player, so I have such qualities
              as sociability and a positive attitude.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="about-me-content">
            <div>
              <h3>Skills gained during all the time of my work</h3>
              <p className="about-me-text">
                I have been working as a programmer for almost 4 years. First
                two years I have tried myself in many spheres such as desktop
                development and also mobile development. But, I loved web
                programming because of its ability and availability on any
                device. Then I started to work as a web developer. At the
                beginning, I worked as a freelancer. Then, after finishing my
                study successfully I started to work in leading companies such
                as JSC " Thermal Power Stations" and LLC "Abad Company"
              </p>
            </div>
            <div className="about-img">
              <img src={aboutImg} alt={aboutImg} className="img-fluid" />
            </div>
            <div className="skills">
              <Skill skill="HTML" percentage={95} />
              <Skill skill="CSS" percentage={90} />
              <Skill skill="SASS" percentage={90} />
              <Skill skill="Bootstrap" percentage={80} />
            </div>
            <div className="skills">
              <Skill skill="Javascript" percentage={85} />
              <Skill skill="React" percentage={80} />
              <Skill skill="Redux" percentage={60} />
              <Skill skill="Git" percentage={90} />
            </div>
          </div>
        </div>
      </section>
      <Waves />
    </>
  );
}

export default AboutMe;
