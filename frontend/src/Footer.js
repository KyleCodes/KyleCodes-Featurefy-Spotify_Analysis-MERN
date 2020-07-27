// import React, {useState, useEffect, useRef} from 'react'
// import "./Footer.css"
// /*
// TODO:
//     https://stackoverflow.com/questions/47658765/objects-are-not-valid-as-a-react-child-found-object-promise
//     figure out how to pass reference of id="creator" into the fetch text function
//         in order to update it once the asynchronous load completes.
// */
// export default function Footer() {
//     return (
//         <div id="Footer">
//             <span id="creator">{}</span>
//         </div>
//     )
// }

import React, {Component} from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {

    constructor() {
        super()
        this.state = {data: ""}
    }

    componentDidMount() {
        fetch("/testing")
            .then(res => res.text)
            .then(text => this.setState({data: text}))
    }


    render() {
        return (
            <div id="Footer">
                <span id="creator">{toString(this.state.data)}</span>
            </div>
        )
    }
}

export default App