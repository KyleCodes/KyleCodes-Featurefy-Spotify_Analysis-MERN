import React, {useState, useEffect} from 'react'
import "./Footer.css"

function Footer() {

    const [message, setMessage] = useState([])

    useEffect(() => {
        fetchText("/testing")
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

export default Footer