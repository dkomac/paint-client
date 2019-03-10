import * as React from 'react';

import Whiteboard from './../../components/Whiteboard';

import './Room.css';

interface IRoom {
	x: number;
	y: number;
	onMouseMove(event: React.MouseEvent<HTMLDivElement>): void;
}

class Room extends React.Component<IRoom> {
	constructor(props: any) {
		super(props);
		this.getMousePosition = this.getMousePosition.bind(this);
	}

	getMousePosition = (e: React.MouseEvent<HTMLElement>): void => {
		console.log(e, 'sda');
	};

	render() {
		return (
			<div className="room-container" onMouseMove={this.getMousePosition}>
				<h1>Room</h1>
				<Whiteboard />
			</div>
		);
	}
}

export default Room;
