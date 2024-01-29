import React from "react";

const Skill = (props) => {
  return (
    <div className={props.className} style={{ backgroundColor: props.bg }}>
      <span>{props.skillName}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

export default Skill;
