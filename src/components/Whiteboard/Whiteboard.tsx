import * as React from 'react';

class Whiteboard extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>canvas</h1>
				<canvas />
			</div>
		);
	}
}

export default Whiteboard;
