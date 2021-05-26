import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './../../../styling/Query.css'

import ArtistName from './ArtistName'

import { queryArtistNames, selectArtist } from './../../../actions/search_actions'

export default function Query() {

    const dispatch = useDispatch()
    const queriedArtistList = useSelector(state => state.search.queriedArtistList)


    const handleArtistSearchInput = (artistTextContent) => {
        console.log("artist query: " + artistTextContent)
        dispatch(queryArtistNames(artistTextContent))
    }

    const handleArtistSelect = (artistSelection) => {
        console.log(`Selected ${artistSelection.name}`)
        // dispatch(selectArtist(artistSelection))
    }


    return (
        <div id="queryWindow">
            <input id="artistQueryBox"
                type="text"
                placeholder="Search for an Artist"
                onChange={(e) => handleArtistSearchInput(e.target.value)}
            />

            <div id="results">
                {
                    queriedArtistList.length > 0 ? (

                        queriedArtistList.map((currArtist) => {
                            return (
                                <ArtistName 
                                    artist={currArtist} 
                                    key={currArtist.id}
                                    handleArtistSelect={handleArtistSelect}
                                />
                            )
                        })

                    ) : (
                        <p>Please enter an artist</p>
                    )
                }
            </div>
        </div>
    )
}
