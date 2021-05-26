import React, {useState, useEffect} from 'react'
import './../../styling/Query.css'

import {queryArtistNames} from './../../actions/search_actions'


import {useSelector, useDispatch} from 'react-redux'

export default function Query() {


    const dispatch = useDispatch()
    const data = useSelector(state => state.search)

    //////////////////////////////////////
    // State + functions relating to artist search input field
    //////////////////////////////////////
    const [artistSearch, setArtistSearch] = useState("Search for an Artist")
    
    // handler fires on each char input to artist text box, sets artist search state
    function handleArtistSearchInput(artistTextContent) {
        console.log("artist query: " + artistTextContent)
        
        dispatch(queryArtistNames(artistTextContent))
        
        setArtistSearch(artistTextContent)
    }

    // when artist search state updates, requests list of 5 artists to display
    useEffect(() => {
        fetchArtistList()
    }, [artistSearch])


    //////////////////////////////////////
    // State + functions relating to returned list of artists for input recommendation / autofill
    //////////////////////////////////////
    const [artistList, setArtistList] = useState()
    
    // sends query string (artistSearch) to server, gets 5 artist json objects back in return
    async function fetchArtistList() {
        let res = await fetch("/artistSearch?artist=".concat(artistSearch), {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}})

        let data = await res.json()
        setArtistList(data)
    }

    // prints the artist list to browser console on each update
    useEffect(() => {
        console.log("QUERIED ARTISTS: ")
        console.log(artistList)
 


        if (artistList != null) {
            document.querySelector("#results").innerHTML = artistList.map((artist) => {
                return (`<p>${artist}</p>`)
            })
        }

    }, [artistList])

    return (
        <div id="queryWindow" className="query_analysis_panels">
            <input  id="artistQueryBox"
                    type="text" 
                    placeholder="Search for an Artist" 
                    onChange={(e) => handleArtistSearchInput(e.target.value)} 
            />

            <div id="results">

            </div>
        </div>
    )
}
