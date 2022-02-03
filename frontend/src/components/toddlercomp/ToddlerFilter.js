import React, { Component } from 'react'
import ToddlerProfile from './ToddlerProfile'
import { connect } from 'react-redux'
import { deleteToddlers } from '../../actions/toddlerActions'

// THIS COMPONENT IS RENDERING THE FILTERED TODDLER(S)

class ToddlerFilter extends Component {
    render() {
        let toddler = this.props.toddler
        let toddlerId = this.props.toddlerId
       
        return (
            <div id="Toddler-filter">
                <br /> 
                <table data-id={toddlerId} class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                         </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{toddler.name}</td>
                            </tr> 
                        </tbody> 
                </table> 
                <ToddlerProfile delete={this.props.deleteToddlers} toddlerShow={this.props.toddler} toddlerId={this.props.toddlerId} />
               
                
            </div>
        )
    }
}



export default connect(null, { deleteToddlers })(ToddlerFilter)