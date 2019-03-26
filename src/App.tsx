import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import logo from './logo.svg';

// pages
import Lobby from './pages/Lobby';
import Room from './pages/Room/Room';

const ROUTES: Array<{ path: string; component: any }> = [
	{
		path: '/lobby',
		component: Lobby
	},
	{
		path: '/room',
		component: Room
	}
];

class App extends React.Component<{ store: any }> {
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
						{ROUTES.map((route) => {
							return (
								<Route
									key={route.path}
									exact
									path={route.path}
									component={route.component}
								/>
							);
						})}
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
