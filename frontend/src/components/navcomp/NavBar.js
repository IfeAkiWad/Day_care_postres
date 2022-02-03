import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav id="nav">
        <div>      
                <Link id="link" to="/">HOME</Link>  
                <Link id="link" to="/daycares/toddlers/new"> NEW STUDENT</Link> 
                <Link id="link" to="/toddlers"> TODDLERS</Link> 
                <Link id="link" to='/gallery'> PHOTO GALLERY</Link> 
        </div>
    </nav>
    )
}

export default NavBar
