import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/homecomp/Home'

class HomeContainer extends Component {
    render() {
        
        return (
            <div>
                {this.props.sunnyDaycare.map ( daycare => {
                    return <Home key={daycare.id} getDaycare={daycare} />
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sunnyDaycare: state.daycareReducer.daycares,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(HomeContainer)
