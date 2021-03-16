import React from 'react'
import './Header.scss'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import SearchBox from '../SearchBox/SearchBox'

const Header = ({size}) => {
    return (
        <div className='header'>
            <Logo size={size}/>
            <Navbar />
            <SearchBox />
        </div>
    )
}

export default Header
