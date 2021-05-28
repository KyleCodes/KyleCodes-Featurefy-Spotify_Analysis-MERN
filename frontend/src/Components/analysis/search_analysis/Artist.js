import React from 'react'

import './../../../styling/Artist.css'

export default function Artist({ artist, handleArtistSelect }) {
    
    console.log(artist)

    return (
        <div className='artistName' onClick={() => { handleArtistSelect(artist) }}>



            <div className='artistArt'>
                <img className='artistImage' src={artist.images[1].url} alt="Artist Image" />
            </div>


            <div className='artistInfo'>

                <div className='artistTitle infoItem'>
                    {artist.name}
                </div>


                <div className='followers infoItem'>
                    {`Followers: ${artist.followers.total}`}
                </div>


                <div className='popularity infoItem'>
                    {`Popularity: ${artist.popularity}`}
                </div>

            </div>

        </div>
    )
}
