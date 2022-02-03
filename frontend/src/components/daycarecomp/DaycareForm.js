import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { submitToddlers } from '../../actions/toddlerActions'

class DaycareForm extends Component {
    constructor() {
        super() //helps constructor execure what itinherited from React.component
        this.state = {
            name: '',
            birthday: '',
            contact: '',
            phone: '',
            allergy: ''
        }

    }

    handleOnChange = (event) => {
        console.log('typing in form')
        this.setState({[event.target.name]: event.target.value})
    }

    handleOnSubmit = (event) => {
        console.log('form submit')
        event.preventDefault();
        this.props.submitToddlers(this.state, this.props.daycareId); //using action dispatch function as a prop (mapDispatchToProps)
        alert("Successfully submitted new student");
        this.props.history.push('/toddlers'); //redirecting to toddlers index

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit} id="form">
                    <br />
                    <h4>New Student Form</h4>
                    <p>Please fill out the form below:</p>
                    <label><u>Name</u>: </label>
                    <input id="form-input" type="text" name="name" onChange={this.handleOnChange} value={this.state.name} placeholder="First name, last name..." required /><br />
                    <label><u>Birthday</u>: </label>
                    <input id="form-input" type="text" name="birthday" onChange={this.handleOnChange} value={this.state.birthday} placeholder="YYYY-MM-DD..." required /><br />
                    <label><u>Emergency Contact</u>: </label>
                    <input id="form-input" type="text" name="contact" onChange={this.handleOnChange} value={this.state.contact} placeholder="First name, last name..." required /><br />
                    <label><u>Phone</u>: </label>
                    <input id="form-input" type="text" name="phone" onChange={this.handleOnChange} value={this.state.phone} placeholder="##########" required /><br />
                    <label><u>Allergy</u>: </label>
                    <input id="form-input" type="text" name="allergy" onChange={this.handleOnChange} value={this.state.allergy} placeholder="Allergy..." required /><br /><br />
                    <input id="form-submit" type="submit" value="Submit"/>
                </form>
                
            </div>
        )
    }
}

export default /*connecting component to the router*/ withRouter(connect( null, { submitToddlers })(DaycareForm))
