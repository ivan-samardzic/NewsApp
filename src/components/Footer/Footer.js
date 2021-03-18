import React from 'react'
import './Footer.scss'
import Logo from '../Logo/Logo'
import CopyrightBox from '../CopyrightBox/CopyrightBox'
import SocialMediaBox from '../SocialMediaBox/SocialMediaBox'

const Footer = ({size}) => {
    return (
        <footer>
            <div className='footer-logo'>
                <Logo size={size} />
            </div>
            <CopyrightBox />
            <SocialMediaBox />
        </footer>
    )
}

export default Footer
