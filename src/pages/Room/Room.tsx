import * as React from 'react';

import Whiteboard from './../../components/Whiteboard';
import { SocketManager } from './../../socket/SocketManager';

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
	settings: { size: number; color: string };
}

interface IpaintCord {
	x: number;
	y: number;
	color: string;
}

const POSITION_DATA: string = 'POSITION_DATA';
const DRAWING_STATUS: string = 'DRAWING_STATUS';

class Room extends React.Component<IRoom, IState> {
	private socketManager = new SocketManager();

	constructor(props: IRoom) {
		super(props);
		this.state = {
			mouseDown: false,
			paintData: [],
			settings: {
				size: 10,
				color: 'blue'
			}
		};

		this.socketManager.socketConnect();
		this.socketManager.socketListen((data: any[]) => {
			this.setState({
				paintData: data
			});
		});
	}
	getMousePosition = (e: React.MouseEvent<HTMLElement>): void => {
		const { mouseDown, settings } = this.state;

		if (mouseDown) {
			const paintCord: IpaintCord = {
				x: e.clientX,
				y: e.clientY,
				...settings
			};
			this.socketManager.sendMessage({
				type: POSITION_DATA,
				payload: paintCord
			});
			// currentLine.push(paintCord);
			this.setState({
				paintData: [...this.state.paintData, paintCord]
			});
		}
	};

	onMouseDown = (): void => {
		this.socketManager.sendMessage({
			type: DRAWING_STATUS,
			payload: { isDrawing: true }
		});
		this.setState({
			mouseDown: true
		});
	};

	onMouseUp = (): void => {
		this.socketManager.sendMessage({
			type: DRAWING_STATUS,
			payload: { isDrawing: false }
		});
		this.setState({
			mouseDown: false
		});
	};

	render() {
		const { paintData } = this.state;
		// const { something } = this.socketManager.getData()
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
