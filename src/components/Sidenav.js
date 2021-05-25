import React from 'react'
import './Sidenav.css'

function Sidenav({classPosition,classBgColor}) {
    let classes = "text-white sidenav"
    let bgColor=(classBgColor?classBgColor:"bg-blue")
    let position=(classPosition?classPosition:"")
    classes=classes+" "+bgColor+" "+position    
    return (
        <div className={classes}>
            SIDENAV            
        </div>
    )
}

export default Sidenav
