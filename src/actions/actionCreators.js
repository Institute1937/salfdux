export function openEvent(event) {
	event.openState = 'show-it'
	return {
		type: "open_event",
		event,
	}
}

export function closeEvent(){
  event = {}
  event.openState = ''
  return {
  	type: "close_event",
  	event,
  }
}
