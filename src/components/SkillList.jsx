import React from 'react'
import Skill from './Skill'

const SkillList = (props) => {
  return (
    <div className={props.className}>
        <Skill className={props.skillClassName} skillName="Python 🐍" bg="blue"/>
        <Skill className={props.skillClassName} skillName="Machine Learning 🤖" bg="red"/>
        <Skill className={props.skillClassName} skillName="Deep Learning 🧠" bg="orange"/>
        <Skill className={props.skillClassName} skillName="Reinforcement Learning 👶" bg="purple"/>
        <Skill className={props.skillClassName} skillName="React ⚛️" bg="yellow"/>
        
    </div>
  )
}

export default SkillList