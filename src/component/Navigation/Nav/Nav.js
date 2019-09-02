import React from 'react';
import './Nav.css'

const Nav = (props) => {
    return (
            <li>
                <a href="{props.href}" >
                {props.children}</a>
            </li>
    )
}

export default Nav
