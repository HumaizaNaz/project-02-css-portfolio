import React from 'react';
import Image from 'next/image';
import "@/app/styles/projects.css"; 
import Link from 'next/link';

function Projects() {
  return (
    <div className="container" id='project'>
      <div className='heading'>
        <h2>My <span>Projects</span></h2>
      </div>
      <div className="card__container">

        {/* Project Cards */}
        {[
          { id: 1, img: "/images/gov.jpg", title: "GIAIC Website", desc: "Project 01", link: "#" },
          { id: 2, img: "/images/port.jpg", title: "Portfolio", desc: "Project 02", link: "#" },
          { id: 3, img: "/images/Resume.png", title: "Resume Builder", desc: "Project 03", link: "#" },
          { id: 4, img: "/images/todo.jpg", title: "Todo App", desc: "Project 04", link: "#" },
          { id: 5, img: "/images/facebook.jpg", title: "CV", desc: "Project 05", link: "#" },
          { id: 6, img: "/images/Easypaisa.jpg", title: "CLI Easypaisa App", desc: "Project 06", link: "#" },
        ].map((project) => (
          <article key={project.id} className="card__article">
            <Image 
              src={project.img} 
              alt={project.title} 
              width={300} 
              height={300} 
              className="card__img" 
            />
            <div className="card__data">
              <span className="card__description">{project.desc}</span>
              <h2 className="card__title">{project.title}</h2>
              <Link href={project.link} className="card__button">Read More</Link>
            </div>
          </article>
        ))}

      </div>
    </div>
  );
}

export default Projects;
