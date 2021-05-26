import React, {useEffect, useState} from 'react'

import Query from './analysis/Query'

import {useSelector, useDispatch} from 'react-redux'
import {retrieveExampleData} from './../actions/search_actions'

import './../styling/Playground.css'

export default function Playground() {
    
    const dispatch = useDispatch()
    const data = useSelector(state => state.search)
    

    useEffect( () => {
        dispatch(retrieveExampleData())
    }, [])
    
    const handleClick = () => {
        dispatch(retrieveExampleData())
        console.log("EX DATA")
        console.log(data)
    }

    return (
        <div id='playground'>
            {/* <button onClick={() => {handleClick()}}>get ex data</button> */}

            <Query />
            
        </div>
    )
}
