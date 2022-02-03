import daycareReducer from "./daycareReducer"
import toddlerReducer from "./toddlerReducer"
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    daycareReducer,
    toddlerReducer,
})

export default allReducers