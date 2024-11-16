import React from 'react';
import {  FaLaptopCode, FaMobileAlt, FaLayerGroup, FaPaintBrush, FaCode, FaLightbulb } from 'react-icons/fa';
import "@/app/styles/services.css";

function ServicesSection() {
  return (
    <section className="services_section" id="services">
      <h2>
        My <span>Services</span>
      </h2>
      <div className="row fadein">
        <div className="card">
          <FaLaptopCode className="icon" />
          <h2>Front-End Development</h2>
          <p>
            I specialize in building responsive and interactive user interfaces using Next.js, React, Tailwind CSS, and modern front-end technologies.
          </p>
        </div>

        <div className="card">
          <FaMobileAlt className="icon" />
          <h2>Mobile-Friendly Designs</h2>
          <p>
            I create seamless mobile-first designs, ensuring your websites and web apps deliver exceptional user experiences across all devices.
          </p>
        </div>

        <div className="card">
          <FaLayerGroup className="icon" />
          <h2>Reusable Components</h2>
          <p>
            I develop clean, modular, and reusable components in React and TypeScript to streamline development and improve scalability.
          </p>
        </div>

        <div className="card">
          <FaPaintBrush className="icon" />
          <h2>UI/UX Design Integration</h2>
          <p>
            I implement visually appealing designs by integrating UI/UX concepts into web applications for optimal usability and aesthetics.
          </p>
        </div>

        <div className="card">
          <FaCode className="icon" />
          <h2>Static and Dynamic Websites</h2>
          <p>
            I create both static websites and dynamic web apps, incorporating modern frameworks like Next.js for server-side rendering (SSR) and static site generation (SSG).
          </p>
        </div>

        <div className="card">
          < FaLightbulb  className="icon" />
          <h2>Problem-Solving Projects</h2>
          <p>
            I have built numerous innovative projects, including resume builders, landing pages, portfolio websites, and interactive games using HTML, CSS, JavaScript, and TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
