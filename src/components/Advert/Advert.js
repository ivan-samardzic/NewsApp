import React from 'react'

const Advert = ({image}) => {
    return (
        <div style={{display : 'flex', margin : '10px auto', cursor : 'pointer'}}>
            <img src={image}  style={{width : '1220px', height : '450px',  margin : '20px auto'}}/>
        </div>
    )
}

export default Advert