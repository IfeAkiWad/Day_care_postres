import React, { Component } from 'react'
import ToddlerFilterContainer from './ToddlerFilterContainer'
import ToddlerTableRow from '../components/toddlercomp/ToddlerTableRow'
import {Link} from 'react-router-dom'


// Daycare component mapping through the props recieved from daycare container and passing props down to toddlerlist and toddler conatainer

class ToddlerContainer extends Component {
    render() { 
       
        return (
            <div id="table-list">
                <br />
                    {/* eslint-disable-next-line array-callback-return*/}
                    {this.props.getDaycare.toddlers.map( toddler => { //Passing props containing an array of toddlers and  their info
                        return <ToddlerTableRow key={toddler.id} toddlerDetail={toddler} />
                    })}
                    <button id="form-return"><Link to="/daycares/toddlers/new">Register Another Student</Link></button>
                    
                     {/* passing props of the whole daycare object */}
                <ToddlerFilterContainer getToddlers={this.props.getDaycare}/> 
            </div>
        )
    }
}

export default ToddlerContainer 
