import React from 'react'
import './Footer.css'
import Logo from '../Logo/Logo'
import CopyrightBox from '../CopyrightBox/CopyrightBox'
import SocialMediaBox from '../SocialMediaBox/SocialMediaBox'

const Footer = ({size}) => {
    return (
        <footer>
            <Logo size={size} />
            <CopyrightBox />
            <SocialMediaBox />
        </footer>
    )
}

export default Footer
