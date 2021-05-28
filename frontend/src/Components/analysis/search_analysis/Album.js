import React from 'react'

import './../../../styling/Album.css'

export default function Album({ album, handleAlbumClick }) {
    return (
        <div className='album' onClick={() => { handleAlbumClick(album) }} >

            <div className='albumArt'>
                <img className='albumImage' src={album.images[1].url} />
            </div>

            <div className='albumInfo'>

                <div className='albumTitle'>
                    {album.name}
                </div>


                <div className='artists infoItem'>
                    {'Artists: '}
                    <div className='artistListContainer'>
                        {album.artists.map((artist) => {
                            return (
                                <div className="albumArtist">{artist.name}</div>
                            )
                        })}
                    </div>
                </div>


                <div className='releaseDate infoItem'>
                    {`Release Date: ${album.release_date}`}
                </div>


                <div className='totalTracks infoItem'>
                    {`Tracks: ${album.total_tracks}`}
                </div>

            </div>

        </div>
    )
}
