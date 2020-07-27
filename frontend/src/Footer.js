// import React, {useState, useEffect, useRef} from 'react'
// import "./Footer.css"
// /*
// TODO:
//     https://stackoverflow.com/questions/47658765/objects-are-not-valid-as-a-react-child-found-object-promise
//     figure out how to pass reference of id="creator" into the fetch text function
//         in order to update it once the asynchronous load completes.
// */


import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div id="Footer">
            <span id="creator">Made by Kyle Muldoon 2020</span>
        </div>
    )
}

export default Footer