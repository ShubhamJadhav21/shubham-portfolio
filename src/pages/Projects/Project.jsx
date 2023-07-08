import React from "react";
import style from "./Project.module.css";
import { projectData } from "../../Data/Data";

const Project = () => {
  return (
    <div className={style.container_projects} id="project">
      <h1 className={style.heading_project}>Projects</h1>

      <div className={style.project_wrapper}>
        {projectData.map((list, index) => (
          
          <div key={index} className={style.project_box}>

            <h1 className={style.heading}>{list.title}</h1>
            <img src={list.img} alt="" className={style.project_img} />

            <div className={style.nav_section}>

              <a href={list.github} target="_blank" rel="noopener noreferrer">
              <span className={style.git}>{list.githubIcon}</span>
              </a>
              <a href={list.previewLink} target="_blank" rel="noopener noreferrer">
              <span className={style.prev}>{list.preview}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
