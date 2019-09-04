import React from 'react';

import './Skill.css'

import Skill from './Skill/Skill'

const Skills = (props) => {
    return (
        <div>
            <h1 className = "head">My Skill</h1>
            <div>
                <ul className = "titleSkill">
                    <li className = "part">
                        <p className = "face face1">HTML</p>
                        <p className = "face face2">I know the basics of HTML, HTML5</p>
                    </li>
                    <li className = "part">
                        <p className = "face face1">CSS</p>
                        <p className = "face face2">I know the basics of CSS, CSS3. Familiar with the libraries: SASS, Aphrodite.</p>
                    </li>
                    <li className = "part">
                        <p className = "face face1">JavaScript</p>
                        <p className = "face face2"></p>
                    </li>
                    <li className = "part">
                        <p className = "face face1">React</p>
                        <p className = "face face2"></p>
                    </li>
                    <li className = "part">
                        <p className = "face face1">Redux / Redux-Saga</p>
                        <p className = "face face2"></p>
                    </li>
                    <li className = "part">
                        <p className = "face face1">Knowledge of OOP</p>
                        <p className = "face face2"></p>
                    </li>
                </ul>
            </div>
            </div>
    )
}

export default Skills
