import React from 'react';
import "@/app/styles/skills.css";

function SkillsSection() {
  return (
    <div className="skills_section" id='skills'>
      <div className="skills_head">
        <h2>My <span>Skills</span></h2>
      </div>

      <div className="skills_main">
        <div className="skill_bar">
          <div className="info">
            <p>HTML & CSS</p>
            <p>90%</p>
          </div>
          <div className="bar">
            <span className="html"></span>
          </div>
        </div>

        <div className="skill_bar">
          <div className="info">
            <p>CSS</p>
            <p>85%</p>
          </div>
          <div className="bar">
            <span className="css"></span>
          </div>
        </div>

        <div className="skill_bar">
          <div className="info">
            <p>TypeScript</p>
            <p>80%</p>
          </div>
          <div className="bar">
            <span className="typescript"></span>
          </div>
        </div>

        <div className="skill_bar">
          <div className="info">
            <p>JavaScript</p>
            <p>80%</p>
          </div>
          <div className="bar">
            <span className="js"></span>
          </div>
        </div>

        <div className="skill_bar">
          <div className="info">
            <p>React.js</p>
            <p>75%</p>
          </div>
          <div className="bar">
            <span className="react"></span>
          </div>
        </div>

        <div className="skill_bar">
          <div className="info">
            <p>Next.js</p>
            <p>70%</p>
          </div>
          <div className="bar">
            <span className="nextjs"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
