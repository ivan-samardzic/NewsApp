import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Advert from '../../components/Advert/Advert'
import RouteName from '../../components/RouteName/RouteName'
import ArticlesBox from '../../components/ArticlesBox/ArticlesBox';
import Spinner from '../../components/Spinner/Spinner'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import NewsContext from '../../context/newsContext'

const Media = (props) => {
    const context = useContext(NewsContext)
    return (
        <NewsContext.Consumer>
            {context => (
            <div className='container-fluid'>
                <Header size='36px' onAdd={() => context.setSidebarOpen(!context.sidebarOpen)} sidebarOpen={context.sidebarOpen} />

                <div className='advert'>
                    <Advert image='https://belizagrebgrad.com.hr/wp-content/uploads/2020/12/unnamed-18-e1607779669396.jpg' />
                </div>

                <RouteName name='media' />
                {context.loading ? <Spinner /> : 
                <ArticlesBox headlineArticles={context.headlineMediaArticles} sideArticles={context.sideMediaArticles} />}
                <Button count={context.mediaCount} setCount={context.setMediaCount} />

                <div className='sidebar' >
                    <Sidebar sidebarOpen={context.sidebarOpen}/>
                </div>

                <Footer size='48px' />
            </div>
            )}
        </NewsContext.Consumer>
    )
}

export default Media
