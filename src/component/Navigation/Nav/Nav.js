import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Nav.css';

const Nav = (props) => {
    return (
            <li className = "Nav">
                <NavLink
                    to = {props.link}
                    exact = {props.exact}
                    activeClassName = {classes.href}>
                {props.children}</NavLink>
            </li>
    )
}

export default Nav
