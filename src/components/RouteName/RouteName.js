import React from 'react'
import './RouteName.css'

const RouteName = ({name}) => {
    return (
        <div className='route-name-box'>
            <h3 className='route-name-item'>{name}</h3>
        </div>
    )
}

export default RouteName
