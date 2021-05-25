import React, {useEffect, useState} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {retrieveExampleData} from './../actions/search_actions'

export default function Playground() {
    
    const dispatch = useDispatch()
    const data = useSelector(state => state.search)
    
    console.log("EX DATA")
    console.log(data)

    useEffect( () => {
        dispatch(retrieveExampleData())
    }, [])
    
    return (
        <div>
            
        </div>
    )
}
