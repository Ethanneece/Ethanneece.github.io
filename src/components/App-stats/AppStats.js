import React from 'react'
import './appStats.css'

function appStats(props) {

    const {followers, userTag, logo} = props.SocialStats
    return(
        <div className="appStats">
            <div className="centerVertical">
                <div className="appStatsHeader">
                    <img className="logo" src={logo} alt="logo"></img>
                    <p className="removeMargin textColor">@{userTag}</p>
                </div>
                <h1 className="textColor">{followers}</h1>
                <p className="textColor">FOLLOWERS</p>
                <p className="upFollowers">^ 12 today</p>
            </div>
        </div>
    )
}

export default appStats; 