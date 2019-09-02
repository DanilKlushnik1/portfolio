import React from 'react';
import './Nav.css'

const Nav = (props) => {
    return (
            <li className = "Nav">
                <a href="{props.href}"  className = "href">
                {props.children}</a>
            </li>
    )
}

export default Nav
