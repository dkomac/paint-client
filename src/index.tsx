import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux';
import storeReducer from './reducers/rootReducer';
const store = createStore(storeReducer);

ReactDOM.render(
	<Router>
		<App store={store} />
	</Router>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
