import React from 'react';

const Header = (props) => {
    return (
        <header className="topfix">
            <h1>8080味道工厂<span role="img" aria-label="Pasta">🍝</span>
            </h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
        </header>
    )
}

export default Header;
