import React from 'react'
import './Header.scss'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import SearchBox from '../SearchBox/SearchBox'
import BurgerButton from '../BurgerButton/BurgerButton'

const Header = ({size,sidebarOpen, onAdd}) => {
    return (
        <div className='header'>
            <Logo size={size}/>
            <div className='center-header-box'>
                <Navbar direction='row'/>
                <SearchBox />
            </div>
            <BurgerButton onAdd={onAdd} sidebarOpen={sidebarOpen}/>
        </div>
    )
}

export default Header
