import React, {useEffect, useState} from 'react'

import Query from './analysis/search_analysis/Query'

import {useSelector, useDispatch} from 'react-redux'
import {retrieveExampleData} from './../actions/search_actions'

import './../styling/Playground.css'

export default function Playground() {
    
    const dispatch = useDispatch()
    const data = useSelector(state => state.search)
    

    return (
        <div id='playground'>
            
            <Query />
            
        </div>
    )
}
