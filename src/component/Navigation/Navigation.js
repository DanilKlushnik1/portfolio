import React from 'react';

import Nav from './Nav/Nav';
import classes from './Navigation.css'

const Navigations = (props) => {
    return (
            <ul className = {classes.back}>
                <Nav link = "/" exact>Home</Nav>
                <Nav link = "/Summary">Summary</Nav>
                <Nav link = "/Skill">My skills</Nav>
                <Nav link = "/Project">My projects</Nav>
                <Nav link = "/Contact">Contacts</Nav>
            </ul>
    )
}

export default Navigations
