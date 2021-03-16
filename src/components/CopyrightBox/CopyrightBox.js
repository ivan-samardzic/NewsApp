import React from 'react'
import './CopyrightBox.scss'

const CopyrightBox = () => {
    return (
        <div className='copyright-box'>
            <h3 className='copyright-sign'><i className="far fa-copyright"></i> NewsLetter App</h3>
            <h4 className='app-description'>Made To Show The Latest News Around The Globe</h4>
            <h4 className='app-version'>This is App Version 1.0.0 And the Code Can Be Checked By Clicking 
                <a href='https://github.com/ivan-samardzic/NewsLetter'>Here</a> 
            </h4>
        </div>
    )
}

export default CopyrightBox
