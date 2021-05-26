import React from 'react'
import './../../styling/Tabs.css'


export default function Tabs(props) {
    
    const handleTabClick = props.handleTabClick

        
    return (
        <div id="tabBar">
            <div id="search_tab" className="tabBtn" onClick={(e) => handleTabClick(e.target.id)}>
                Search
            </div>  

            <div id="history_tab" className="tabBtn" onClick={(e) => handleTabClick(e.target.id)}>
                Listening History
            </div>

            <div id="playlists_tab" className="tabBtn" onClick={(e) => handleTabClick(e.target.id)}>
                Playlists
            </div>  

            <div id="friends_tab" className="tabBtn" onClick={(e) => handleTabClick(e.target.id)}>
                Friends
            </div>                
        </div>
    )
}
