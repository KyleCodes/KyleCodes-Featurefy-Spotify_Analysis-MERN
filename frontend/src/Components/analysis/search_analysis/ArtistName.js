import React from 'react'

export default function ArtistName({artist, handleArtistSelect}) {
    return (
        <div 
            className='artistName'
            onClick={() => {handleArtistSelect(artist)}}
        >
            <p>{artist.name}</p>
        </div>
    )
}
