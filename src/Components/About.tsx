import React from 'react';
import { FaPaperPlane, FaPhoneAlt, FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiNextdotjs, SiTypescript } from 'react-icons/si'; // Importing Next.js and TypeScript icons
import { TbBrandTailwind } from 'react-icons/tb'
import "@/app/styles/about.css";

export default function About() {
  return (
    <section id="about-section">

      <div className="about-right">
      <h1><span className="about">About</span> <span className="me">Me</span></h1>
        <p>
        Hello! I&apos;m a passionate web developer with a strong foundation in front-end technologies. I love building
          interactive and dynamic websites that provide great user experiences. With expertise in HTML, CSS, JavaScript, React, Next.js ,Typescript and Tailwind CSS 
          I am constantly learning and evolving to stay up-to-date with the latest trends in the web development industry.
</p>
        <div className="address">
          <ul>
            <li>
              <span className="address-logo">
                <FaPaperPlane />
              </span>
              <p>Address</p>
              <span className="saprater">:</span>
              <p>Karachi Pakistan</p>
            </li>
            <li>
              <span className="address-logo">
                <FaPhoneAlt />
              </span>
              <p>Phone No</p>
              <span className="saprater">:</span>
              <p>+92 123456789</p>
            </li>
            <li>
              <span className="address-logo">
                <HiOutlineMail />
              </span>
              <p>Email ID</p>
              <span className="saprater">:</span>
              <p>humaizaasghar@gmail.com</p>
            </li>
          </ul>
        </div>

        <div className="expertise">
          <h3>My Expertise</h3>
          <ul>
  <li>
    <span className="expertise-logo" id="html-icon">
      <FaHtml5 />
    </span>
    <p>HTML</p>
  </li>
  <li>
    <span className="expertise-logo" id="css-icon">
      <FaCss3Alt />
    </span>
    <p>CSS</p>
  </li>
  <li>
    <span className="expertise-logo" id="js-icon">
      <FaNodeJs />
    </span>
    <p>JavaScript</p>
  </li>
  <li>
    <span className="expertise-logo" id="react-icon">
      <FaReact />
    </span>
    <p>React Js</p>
  </li>
  <li>
              <span className="expertise-logo" id="next-icon">
                <SiNextdotjs />
              </span>
              <p>Next.js</p>
            </li>
            <li>
              <span className="expertise-logo" id="ts-icon">
                <SiTypescript />
              </span>
              <p>TypeScript</p>
            </li>
            <li>
              <span className="expertise-logo" id="tailwind-icon">
                <TbBrandTailwind />
              </span>
              <p>Tailwind CSS</p>
            </li>
</ul>

        </div>
      </div>
    </section>
  );
}
