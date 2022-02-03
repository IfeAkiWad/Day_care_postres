const toddlerReducer = (state = {toddlers: []}, action) => {
    switch (action.type) {
        case 'LOADING_TODDLERS':
            return {
            ...state, 
            toddlers: [...state.toddlers, action.payload], 
            loading: true
            }
        case 'ADD_TODDLERS':
            console.log('ADDING TODDLER')
            return {
                ...state,
                toddlers: action.payload,
                loading: false
            }
        case "REMOVE_TODDLER":
            let deleteToddlers = state.toddlers.filter(toddler => toddler.id === action.payload.id)
            return {...state, toddlers: deleteToddlers}
        default:
            return state;
    }
}

export default toddlerReducer