import React from 'react';

import Nav from './Nav/Nav'

const Navigations = (props) => {
    return (
        <div>
            <ul>
                <Nav>Home</Nav>
                <Nav>For me</Nav>
                <Nav>Me skill</Nav>
                <Nav>My projects</Nav>
                <Nav>Contact</Nav>
            </ul>
        </div>
    )
}

export default Navigations
