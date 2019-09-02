import React from 'react';

import Skill from './Skill/Skill'

const Skills = (props) => {
    return (
        <div>
            <h3>Skills:</h3>
            <ul>
                <Skill>HTML5/CSS3</Skill>
                <Skill>React</Skill>
                <Skill>Redux / Redux-Saga </Skill>
                <Skill>JavaScript</Skill>
                <Skill>Knowledge of OOP</Skill>
            </ul>
        </div>
    )
}

export default Skills
