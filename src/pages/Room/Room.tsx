import * as React from 'react';

import Whiteboard from './../../components/Whiteboard';

import './Room.css';

interface IRoom {
	// x: number;
	// y: number;
	props: any;
	state: any;
	// onMouseMove(event: React.MouseEvent<HTMLDivElement>): void;
}

interface IState {
	mouseDown: boolean;
	paintData: IpaintCord[];
}

interface IpaintCord {
	x: number;
	y: number;
	color: string;
}

class Room extends React.Component<IRoom, IState> {
	constructor(props: IRoom) {
		super(props);
		this.state = {
			mouseDown: false,
			paintData: []
		};
	}
	getMousePosition = (e: React.MouseEvent<HTMLElement>): void => {
		const { mouseDown } = this.state;

		if (mouseDown) {
			const paintCord: IpaintCord = {
				x: e.clientX,
				y: e.clientY,
				color: 'black'
			};
			this.setState({
				paintData: [...this.state.paintData, paintCord]
			});
		}
	};

	onMouseDown = (): void => {
		this.setState({
			mouseDown: true
		});
	};

	onMouseUp = (): void => {
		this.setState({
			mouseDown: false
		});
	};

	render() {
		const { paintData } = this.state;
		return (
			<div
				className="room-container"
				onMouseMove={this.getMousePosition}
				onMouseDown={this.onMouseDown}
				onMouseUp={this.onMouseUp}
			>
				<h1>Room</h1>
				<Whiteboard data={paintData} />
			</div>
		);
	}
}

export default Room;
