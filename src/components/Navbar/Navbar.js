import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar-box'>
            <ul className='navbar-box-list'>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Business</a>
                </li>
                <li>
                    <a href='#'>Media</a>
                </li>
                <li>
                    <a href='#'>Sports</a>
                </li>
                <li>
                    <a href='#'>Science</a>
                </li>
                <li>
                    <a href='#'>Tech</a>
                </li>
                <li>
                    <a href='#'>Health</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
