import React from 'react'

const Advert = ({image}) => {
    return (
        <div style={{display : 'flex', margin : '10px auto', cursor : 'pointer'}}>
            <img src={image}  style={{width : '1200px', height : '450px',  margin : '0px auto'}}/>
        </div>
    )
}

export default Advert