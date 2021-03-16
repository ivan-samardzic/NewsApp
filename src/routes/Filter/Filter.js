import React from 'react'
import Header from '../../components/Header/Header'
import Advert from '../../components/Advert/Advert'
import RouteName from '../../components/RouteName/RouteName'
import FilterArticlesBox from '../../components/FilterArticlesBox/FilterArticlesBox'
import Footer from '../../components/Footer/Footer'


const Filter = ({location:{state:{filterArticles}}}) => {
    console.log(filterArticles.articles);
    return (
        <div>
            <Header size='36px' />
            <Advert image='https://content.fortune.com/wp-content/uploads/2016/02/giphy-3.gif?resize=1200,600' />
            <RouteName name='Filter' />
            <FilterArticlesBox filterArticles={filterArticles} />
            <Footer size='48px' />
        </div>
    )
}

export default Filter
