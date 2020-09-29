import React, {useState, useEffect} from 'react'
import "./Search.css"

function TextDirections(props) {
    return (
        <div id="text_directions" >
            {props.msg}
        </div>
    )
}

function TextInput() {
    return (
        <div id="text_input">
            Text Input
        </div>
    )
}

function ImageSelectorInput() {
    return (
        <div id="image_input">
            IMAGES
        </div>
    )
}

function goButton() {
    return (
        <div id="go_button">
            GO!
        </div>
    )
}




export default function Search() {
    /*
        STATE:
            - text directions
            - user text input
            - artist images
            - album images of selcted artist
            - image selection input
    */
    
    //let SEARCH_STATE = "artist_select"
    //const [SEARCH_STATE, SET_SEARCH_STATE] = useState([])
    // const [textInput, setTextInput] = useState([])
    // const [textDirections, setTextDirections] = useState([])
    // const [artistImages, setArtistImages] = useState([])
    // const [albumImages, setAlbumImages] = useState([])



    return (
        <div id="SearchInterface">
            <TextDirections msg="Enter an Artist"></TextDirections>
            <div id="Input">
                <TextInput></TextInput>
                <ImageSelectorInput></ImageSelectorInput>
            </div>
            <goButton></goButton>
        </div>
    )

}


