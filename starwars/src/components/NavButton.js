import React from 'react';

const NavButton = ({ url, children, onButtonClick, name }) => {
    return (
        <button id={name} onClick={() => onButtonClick(url)}>{ children }</button>
    )
}

export default NavButton;