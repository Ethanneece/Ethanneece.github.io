import React from 'react'
import './appOverview.css'

function AppOverview(props) {

    const {title, count, logo, change} = props.appStats

    return (
        <div className='grid'>
            <h1 className="appOverviewTitle gridItem">{title}</h1>
            <img className="" src={logo} alt='logo' />
            <p className="appOverviewParagraph">{count}</p>
            <p className="appOverviewChange">{change}%</p>
        </div>
    )
}

export default AppOverview; 