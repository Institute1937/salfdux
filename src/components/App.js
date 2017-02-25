import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators.js';

import Main from './First.js';

function mapStateToProps(state){
	console.log(state)
	return {
		posts: state.posts,
		comments: state.comments,
		events: state.events,
		event: state.event
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators,dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;