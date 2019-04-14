import * as React from 'react';

export interface ILobbyInterface {
	roomlist: string[];
}

class Lobby extends React.Component<ILobbyInterface> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return <div>hello lobby</div>;
	}
}

export default Lobby;
