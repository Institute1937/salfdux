import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import events from './events';
import event from './event';

const rootReducer = combineReducers({
	events,
	event,
	routing :routerReducer
});

export default rootReducer;