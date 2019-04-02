import React, { Component } from 'react';
import './App.css';

import {
	Router,
	Route,
	IndexRoute,
	browserHistory
} from 'react-router/lib';

import Layout from './components/Layout';

import Pages from './pages';

class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Layout}>
					<IndexRoute component={Pages.Home} />

					<Route path="/video" component={Pages.Video} />
				</Route>
			</Router>
		);
	}
}

export default App;
