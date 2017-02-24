//action, store

function changeEvent(state = [], action){
	switch (action.type) {
		case 'open_event' :
            return state
         default:
            return state
		}
	}



function event(state = [], action){
	if (typeof action.event !== 'undefined'){
		console.log(160)
		console.log(action)
		console.log(17)
		return action.event
	}
	return state
}

export default event;