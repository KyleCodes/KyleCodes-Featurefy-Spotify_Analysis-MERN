import React from 'react'
import "./Header.css"
// import Logo from "../spotify.png"

export default function Header() {
    return (
        <div id="Header">
            <img id="logo" src={'/images/spotify.png'} alt="Logo"></img>
            <div id="title-bar">
                Featurefy<span id="description">A Spotify Analysis Tool</span>
            </div>
        </div>
    )
}
