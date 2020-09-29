import React, {useState, useEffect} from 'react'
import './PageContent.css'
import Search from "./Search"



function PageContent() {
    

    const [session_state, set_session_state] = useState("search")

    switch (session_state) {
        case "search":
            return (
                <div id="ViewWindow">
                    <Search></Search>
                </div>
            )
            break

        default:
            return (
                <div id="ViewWindow">

                </div>
            )
    }


}

export default PageContent

