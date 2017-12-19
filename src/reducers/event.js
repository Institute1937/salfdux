const initialState = {
 
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EVENT_SUCCESS':
      return action.event;
    case 'CLOSE_EVENT':
      const eventState = Object.assign({}, action.event, {openState:''});
      console.log(eventState)
      return eventState
    default:
      return state;
  }
}

 