import * as openSocket from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3001';

export class SocketManager {
	private socket: any;
	private socketData: any;

	socketConnect() {
		this.socket = openSocket(SOCKET_URL);
		this.socket.emit('connection', 'hello World');
		console.log(this.socket);
	}

	socketListen(cb: any) {
		this.socket.on('FROM_SERVER', (action: any) => {
			console.log(action);
			cb(action.payload);
			// this.socketData = action.payload;
		});
	}

	getSocketData() {
		return this.socketData;
	}

	sendMessage(action: { type: string; payload: any }): void {
		this.socket.emit('message', action);
	}
}
