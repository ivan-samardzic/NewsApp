import React from 'react'
import './Advert.scss'

const Advert = ({image}) => {
    return (
        <div style={{display : 'flex', margin : '10px auto'}}>
            <img src={image}  style={{width : '600px', height : '240px',  margin : '0px auto'}}/>
        </div>
    )
}

export default Advert