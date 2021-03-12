import React from 'react'
import './SearchBox.css'

const SearchBox = () => {
    return (
        <form className="form" >
            <input type="text" className="form-control"
            placeholder="Search..." />
            <button type="submit" className="btn"></button>
            <i className="fas fa-search"></i>
        </form>
)
}

export default SearchBox
