import React, { Component } from 'react'
import { connect } from 'react-redux'
import DaycareForm from '../components/daycarecomp/DaycareForm'

class DaycareFormContainer extends Component {
    render() {
        const daycare = this.props.sunnyDaycare
        const daycareId = daycare.map(d => {
            return d.id
        })
        // const daycareToddler = daycare.map(d => {
        //     return d.toddlers
        // })
        return (
            <div id="daycare-form">
                <DaycareForm /*toddler={daycareToddler}*/ daycareId={daycareId} />
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

export default connect(mapStateToProps)(DaycareFormContainer)
