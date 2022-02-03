import React from 'react'
import HomeContainer from '../containers/HomeContainer'

const Welcome = () => {
    return (
        <div id="welcome">
            <h1>The Wonder Years Care</h1> 
                <p>With currently <u id="underline">only one location</u> in the U.S:</p>
            <HomeContainer />
            <p>We are dedicated to your little one's development and future. We aren't your ordinary "day care". We are an academic center! Your little one's mind matters to us.</p>
            <h3>At The Wonder Years, We Care 🧡</h3>
            <h4>Coming Soon:</h4>
                <p>Tator Totts Academy<br />
                170 Willoughby St, Brooklyn, NY 11201
                </p>
        </div>
       
    )
}

export default Welcome
