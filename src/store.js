import {
    createStore,
    applyMiddleware,
    combineReducers
  } from 'redux';
import thunk from 'redux-thunk';

import events from './reducers/events';
import event from './reducers/event';

  
const reducers = combineReducers({
    events,
    event
});
const middleware = [thunk];
  
export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
)
  