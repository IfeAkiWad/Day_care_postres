import React from 'react'

const Home = (props) => {
    return (
        <div class="welcome"> 
                    <h4>{props.getDaycare.name}</h4>
                    Phone: <br />
                    (212)555-1918 <br /><br />
                    Location: <br />
                    {props.getDaycare.address}<br /><br />
        </div>
    )
}

export default Home
