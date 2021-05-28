import React, {useEffect, useState} from 'react'

import ArtistQuery from './analysis/search_analysis/ArtistQuery'
import AlbumSelection from './analysis/search_analysis/AlbumSelection'



import './../styling/Playground.css'

export default function Playground() {
    
    
    return (
        <div id='playground'>
            
            <ArtistQuery />
            <AlbumSelection />
            
        </div>
    )
}
