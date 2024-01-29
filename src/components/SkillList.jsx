import React from "react";
import Skill from "./Skill";
import skillData from "../skillData";

const SkillList = (props) => {
  const skills = skillData();
  const beginnerEmoji = "👶";
  const intermediateEmoji = "👨";
  const advancedEmoji = "🤠";
  console.log(skills);

  return (
    <div className={props.className}>
      {skills.map((skill) => (
        <Skill
          className={props.skillClassName}
          skillName={skill.skill}
          emoji={
            skill.level === "beginner"
              ? beginnerEmoji
              : skill.level === "intermediate"
              ? intermediateEmoji
              : advancedEmoji
          }
          bg={skill.color}
        ></Skill>
      ))}

      {/* <Skill className={props.skillClassName} skillName="Python 🐍" bg="blue" />
      <Skill
        className={props.skillClassName}
        skillName="Machine Learning 🤖"
        bg="red"
      />
      <Skill
        className={props.skillClassName}
        skillName="Deep Learning 🧠"
        bg="orange"
      />
      <Skill
        className={props.skillClassName}
        skillName="Reinforcement Learning 👶"
        bg="purple"
      />
      <Skill
        className={props.skillClassName}
        skillName="React ⚛️"
        bg="yellow"
      /> */}
    </div>
  );
};

export default SkillList;
