import * as openSocket from 'socket.io-client';

export function socketService() {
	const socket = openSocket('http://localhost:3000');
	console.log(socket);
	socket.emit('connection', { type: 'message', value: 'hello world' });
}
