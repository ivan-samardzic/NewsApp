import React from 'react'
import './Logo.scss'
import { Link } from 'react-router-dom'

const Logo = ({size}) => {
    return (
        <div className='logo-box'>
            <Link to='/'>
            <i className="fab fa-neos"></i><span>ewsApp</span>
            </Link>
        </div>
    )
}

export default Logo
