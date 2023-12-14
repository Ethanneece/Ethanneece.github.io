import React from 'react'

import "./header.css"

function Header(props) {

    return (
        <div className="header">
            <h1 className="headerTitle">Social Media DashBoard</h1>
            <button className="headerLogin">Log in</button>
        </div>
    )
}

export default Header; 