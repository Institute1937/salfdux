export const openEvent = (event,history) => {
  event.openState = 'show-it'
  history.push(`/events/${event.id}`)
	return {
		type: "GET_EVENT_SUCCESS",
		event,
	}
}

export const closeEvent = (history) =>{
  let event = {}
  console.log(history)
  history.push(`/`)
  event.openState = ''
  return {
  	type: "CLOSE_EVENT",
  	event,
  }
}