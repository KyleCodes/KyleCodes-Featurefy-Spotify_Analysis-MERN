import React, {useState, useEffect} from 'react'
import Tabs from './Tabs'
import './../../styling/Header.css'

// HEADER CONTAINS WEBSITE LOGO, TITLE, AND LOGIN AREA (NOT YET)
export default function Header() {
    
    const [tabSelected, setTabSelected] = useState("search_tab")

    useEffect(() => {
        document.getElementById(tabSelected).style.backgroundColor = '#0e632c'   
    })

    function handleTabClick(tab_id) {
        if (tab_id === tabSelected)
            return 
        
        console.log('clicked ' + tab_id)
        Array.from(document.querySelectorAll('.tabBtn')).map((tab) => tab.style.backgroundColor = '#1db954')
        setTabSelected(tab_id)
    }
    
    
    return (
        <div id="header">
            <div id="header-banner">
                <img id="logo" src={'/images/spotify.png'} alt="Logo"></img>
                <div id="title-bar">
                    Featurefy<span id="description">A Spotify Analysis Tool</span>
                </div>
            </div>
            
            <div id="header-nav">
                <Tabs handleTabClick={handleTabClick} />
            </div>
        </div>
    )
}
