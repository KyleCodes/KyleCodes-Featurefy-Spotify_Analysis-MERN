import React from 'react'
import "./Footer.css"
import {fetchText} from './httpUtils.js'

let res = fetchText("/testing")


/*
TODO:
    figure out how to pass reference of id="creator" into the fetch text function
        in order to update it once the asynchronous load completes.
*/


export default function Footer() {



    return (
        <div id="Footer">
            <span id="creator">{}</span>
        </div>
    )
}
