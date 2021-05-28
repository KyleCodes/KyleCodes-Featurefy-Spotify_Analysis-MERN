import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './../../../styling/ArtistQuery.css'

import Artist from './Artist'

import { queryArtistNames, selectArtist } from '../../../actions/search_actions'

export default function ArtistQuery() {

    const dispatch = useDispatch()
    const queriedArtistList = useSelector(state => state.search.queriedArtistList)



    const handleArtistSearchInput = (artistTextContent) => {
        console.log("artist query: " + artistTextContent)
        dispatch(queryArtistNames(artistTextContent))
    }

    const handleArtistSelect = (artistSelection) => {
        console.log(`Selected ${artistSelection.name}\t|\tID: ${artistSelection.id}`)
        dispatch(selectArtist(artistSelection.id))
    }


    return (
        <div className="interactionWindow" id='queryWindow'>
            <input id="artistQueryBox"
                type="text"
                placeholder="Search for an Artist"
                onChange={(e) => handleArtistSearchInput(e.target.value)}
            />


            <div id="results">
                {
                    queriedArtistList.length > 0 ? (

                        queriedArtistList.map((currArtist) => {

                            if (currArtist.images.length > 0) {
                                return (
                                    <Artist
                                        artist={currArtist}
                                        key={currArtist.id}
                                        handleArtistSelect={handleArtistSelect}
                                    />
                                )
                            }
                            else {
                                ;
                            }
                        })

                    ) : (
                        <p>Please enter an artist</p>
                    )
                }
            </div>


        </div>
    )
}


