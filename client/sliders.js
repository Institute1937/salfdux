import React from 'react';

import { render } from 'react-dom';

import App from './components/App.js';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store.js'

console.log(store)
console.log(App)

const router = (
	<Provider store={store}>
	    <Router history={history}>
	        <Route path="/" component={App}>
	            <IndexRoute></IndexRoute>
	            <Route path="/view/:postId"></Route>
       	    </Route>
 	    </Router>
	</Provider>
	)


render(router, document.getElementById('root'));