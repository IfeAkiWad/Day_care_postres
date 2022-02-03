import React, { Component } from 'react'
import { connect } from 'react-redux';
import ToddlerContainer  from './ToddlerContainer';
import { fetchDaycares } from '../actions/daycareActions';
import { fetchToddlers } from '../actions/toddlerActions';

class DaycareContainer extends Component {
    componentDidMount() {
        this.props.fetchDaycares()
        // console.log('c')
        this.props.fetchToddlers()
        // console.log('d')
    }
      
    render() {
        return (
            

            <div>
                 {this.props.sunnyDaycare.map ( daycare => {
                    return <ToddlerContainer key={daycare.id} getDaycare={daycare} />
                })}   
            </div>
        )
    }
}

//connect the data in mapStateToProps() (the daycares portion of the state) to the DaycareContainer component
const mapStateToProps = state => {
    return {
        sunnyDaycare: state.daycareReducer.daycares,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { fetchDaycares, fetchToddlers })(DaycareContainer)

