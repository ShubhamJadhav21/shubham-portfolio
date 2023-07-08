import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.wrapper} id="about">
      <h1 className={style.about}>About Me</h1>
      <div className={style.container}>
        <div className={style.container_about}>
          <i className={style.let}>let </i>{" "}
          <span className={style.me}> me</span>
          <span className={style.let}> = </span>
          <div>
            <span className={style.bracket}>&#123;</span>
            <br />
            <span className={style.key}>name : </span>
            <span className={style.values}>"Shubham Jadhav"</span>
            <br />
            <span className={style.key}>code : </span>
            <span className={style.values}>"Javascript"</span>
            <br />
            <span className={style.key}>web : </span>
            <span className={style.values}>["HTML","CSS","React"]</span>
            <br />
            <span className={style.key}>devops : </span>
            <span className={style.values}>"Github</span>
            <br />
            <span className={style.key}>message :</span>
            <span className={style.values}>"Focused"</span>
          </div>
          <b></b>
          <span className={style.bracket}>&#125;</span>
        </div>
        <div className={style.right_section}>
          <h2 className={style.right_section_heading}>Hi,&nbsp;I'm</h2>
          <h1 className={style.right_section_name}>Shubham Jadhav</h1>
          <h2 className={style.right_section_heading}>Frontend Developer</h2>
          <p style={{ color: "#d1d5db" }}>
            Enthusiastic and motivated self-learning in Information Technology.
            Intersted in exploring new things about Compouter knowledge and Web
            Development.Now I am looking for more experience in my field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
