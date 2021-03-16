import React from 'react'
import { Link } from 'react-router-dom'
import './FilterArticle.scss'

const FilterArticle = ({article}) => {
    return (
        <div className='filter-box'>
                <img className='filter-poster' src={article.urlToImage} alt='image' />
                <div className='filter-details'>
                    <div className='filter-title'>{article.title}</div>
                    <div className='filter-description'>{article.description}</div>
                    <button className='btn'><a href={article.url}><i className="fas fa-arrow-right"></i></a></button>
                </div>
        </div>
    )
}

export default FilterArticle
