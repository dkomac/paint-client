import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';

import logo from './logo.svg';

// pages
import Lobby from './pages/Lobby';
import Room from './pages/Room/Room';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
						<Menu />
					</header>
					<div>
						<Route exact path="/lobby" component={Lobby} />
						<Route exact path="/room" component={Room} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
