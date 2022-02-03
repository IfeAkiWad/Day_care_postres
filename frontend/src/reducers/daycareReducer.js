const daycareReducer = (state = { daycares: [], loading: false }, action) => {
    switch (action.type) {
      case "LOADING_DAYCARES":
        return {
          ...state,
          daycares: [...state.daycares],
          loading: true,
        };
      case "ADD_DAYCARES":
        return {
          ...state,
          daycares: action.daycares,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default daycareReducer;


