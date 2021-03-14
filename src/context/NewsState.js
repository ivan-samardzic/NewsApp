import React, { useState, useReducer, useEffect } from 'react';
import NewsContext from './newsContext';

const NewsState = props => {
    return (
        <NewsContext.Provider 
        value={{}}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState;