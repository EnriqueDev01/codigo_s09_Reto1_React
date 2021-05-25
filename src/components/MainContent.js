import React from 'react'
import './MainContent.css'
import Sidenav from "./Sidenav"

function MainContent() {
    return (
        <div className="bg-violet text-white main">
            MAIN CONTENT
            <Sidenav classPosition="pos-absolute-right"/>
        </div>
    )
}

export default MainContent
