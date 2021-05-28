import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Album from './Album'

export default function AlbumSelection() {
    
    const artistAlbums = useSelector( state => state.search.selectedArtist.albums)
    const [selectedAlbums, setSelectedAlbums] = useState([])

    const handleAlbumClick = (album) => {
        
        if (!selectedAlbums.includes(album.id)) {
            setSelectedAlbums(selectedAlbums => [...selectedAlbums, album.id])
        }
    }

    useEffect(() => {
        console.log('Selected Items:')
        console.log(selectedAlbums)
    }, [selectedAlbums])
    
    return (
        <div className="interactionWindow" id='AlbumWindow'>
            

            <div id="albums">
                {
                    artistAlbums.length > 0 ? (

                        artistAlbums.map((currAlbum) => {
                            return (
                                <Album
                                    album={currAlbum}
                                    key={currAlbum.id}
                                    handleAlbumClick={handleAlbumClick}
                                />
                            )
                        })

                    ) : (
                        <p>Albums will appear here once you select an artist</p>
                    )
                }
            </div> 




        </div>
    )
}
