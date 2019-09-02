import React from 'react';

const Link = (props) => {
    return (
        <div>
            <a href = {props.link}>{props.children}</a>
        </div>
    )
}

export default Link