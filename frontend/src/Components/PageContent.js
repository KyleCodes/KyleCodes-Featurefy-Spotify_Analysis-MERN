import React, {useState, useEffect} from 'react'
import './../styling/PageContent.css'
import Tabs from './header/Tabs'
import Query from './analysis/search_analysis/Query'
import Analysis from './analysis/Analysis.js'

// PAGECONTENT IS FOR USER INTERACTION. IT IS THE MEAT AND BONES OF THE WEBAPP
// IT IS USED FOR USER TO SET UP QUERIES AND VIEW THE ANALYSIS OF THEM
export default function PageContent() {

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
        <div id="InteractionWindow">
            
            {/* Top bar navigation Tabs */}
            <Tabs handleTabClick={handleTabClick} />

            {/* Main window containing Query and Analysis */}
            <div id="QuerySearchBox">
                <Query />
                <Analysis />
            </div>

        </div>
    )

}


