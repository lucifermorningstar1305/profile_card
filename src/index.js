import React from 'react'
import ReactDom from 'react-dom/client'
import Avatar from './components/Avatar'
import "./index.css"
import Intro from './components/Intro'
import SkillList from './components/SkillList'


const App = () => {
    return ( 
        <div className="card">
            <Avatar src="profile_pic/avatar.jpeg" name="my_pic" className="avatar"/>
            <Intro className="data"/>
            <SkillList className="skill-list" skillClassName="skill"/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)