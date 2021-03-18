import React from 'react'
import './BurgerButton.scss'

const BurgerButton = ({sidebarOpen,onAdd}) => {
    return (
        <div className="hamburger" onClick={onAdd}>
            {sidebarOpen ?  <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            
      </div>
    )
}

export default BurgerButton
