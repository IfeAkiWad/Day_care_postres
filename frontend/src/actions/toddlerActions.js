export const fetchToddlers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TODDLERS'})
    console.log('a')

    fetch('http://localhost:3000/toddlers')
    .then(response => {
      return response.json()
    })
    .then(toddlers => {
      console.log('b')
      dispatch({ type: 'ADD_TODDLERS', payload: toddlers })
    })
  }
}

export const submitToddlers = (toddler, daycareId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/daycares/${daycareId}/toddlers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },  
        body: JSON.stringify(toddler)
      })
      .then(response => response.json())
      .then(toddler => {
        // debugger
        console.log(toddler, "submitting toddler")
        dispatch({ type: 'ADD_TODDLERS', payload: toddler })
        
      })
    }  
}

export const deleteToddlers = (toddlerId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/toddlers/${toddlerId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify()
    })
    .then(response => response.json())
    .then(toddler => {
      console.log(toddler, "deleting toddler")
      dispatch({ type: 'REMOVE_TODDLER', payload: toddler })                    
      alert(toddler.message)
    })
    

  }
}

