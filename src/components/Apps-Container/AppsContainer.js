import React from 'react'
import AppStats from '../App-stats/AppStats'
import AppAdd from '../App-Add/AppAdd'
import './AppsContainer.css'

function AppsContainer(props) {

    const {apps, setPopUp} = props 

    return (<div className="appsContainer">
        {apps.map(app => <AppStats key={app.logo} SocialStats={app} />)}
    </div>)
}

export default AppsContainer;