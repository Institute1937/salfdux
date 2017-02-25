import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index.js';

import events from './data/events.js';

console.log(rootReducer)

const defaultState = {
	events,
	event
};

console.log(defaultState)
const store = createStore(rootReducer, defaultState);
console.log(16)
console.log(store)

export const history = syncHistoryWithStore(browserHistory, store)

export default store;
