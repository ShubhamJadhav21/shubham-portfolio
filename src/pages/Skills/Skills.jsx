import React from "react";
import style from "./Skills.module.css";
import { SkillData } from "../../Data/Data";

const Skills = () => {
  return (
    <div id="skills">
      <div className={style.wrapper}>
        <h1 className={style.heading}>Skills</h1>
        <div className={style.skill_container}>
          {SkillData.map((skill, index) => (
            <div key={index} className={style.skill}>
              <img src={skill.image} alt={skill.name} />
              <span className={style.name}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
