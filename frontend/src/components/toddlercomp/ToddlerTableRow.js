import React, { Component } from 'react'

// THIS COMPONENT IS RENDERING THE INDEX OF THE AVAILABLE TODDLERS

export default class ToddlerTableRow extends Component {
    render() {
        const toddler = this.props.toddlerDetail
        console.log(toddler)
        return (
            <div className="table-list">
                
                <br />
                <table class="table">
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
            
            </div>
        )
    }
}
