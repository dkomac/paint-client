import * as React from 'react';
import { socketService } from './../socket/socket';

export interface ILobbyInterface {
	roomlist: string[];
}

class Lobby extends React.Component<ILobbyInterface> {
	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		socketService();
	}

	render() {
		return <div>hello lobby</div>;
	}
}

export default Lobby;
