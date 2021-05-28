import React, {useState, useEffect} from 'react'
import "./../../styling/Footer.css"

// USED FOR DISPLAYING ONE LINE CONNECTION STATUS AT THE BOTTOM OF THE PAGE
export default function Footer() {

    const [message, setMessage] = useState([])

    useEffect(() => {
        fetchText("/api/connStatus")
    }, [])

    async function fetchText(url) {
        let response = await fetch(url)
        let data = await response.text()
        console.log(data)
        setMessage(data)
    }

    return (
        <div id="Footer">
            {message}
        </div>
    )
}