import React from 'react'
import AppOverview from '../App-Overview/AppOverview'

import './OverviewContainer.css'


function OverviewContainer(props) {

    const {stats} = props

    return (
        <div className="OverviewContainerFlex">
            {stats.map(stat => {
                return (<div className="statsFlex">
                    <AppOverview appStats={stat[0]} />
                    <AppOverview appStats={stat[1]} />
                </div>)
            })}   
        </div>
    )
}

export default OverviewContainer; 