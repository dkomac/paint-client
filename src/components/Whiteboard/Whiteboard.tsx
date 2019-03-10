import * as React from 'react';

interface IpaintCord {
	x: number;
	y: number;
	color: string;
}

interface IProps {
	data: IpaintCord[];
}

interface IState {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
}

class Whiteboard extends React.Component<IProps, IState> {
	private canvas: any;
	private ctx: any;

	constructor(props: any) {
		super(props);
		console.log(this.canvas);

		this.canvas = React.createRef();
		// this.ctx = this.canvas.current.getContext('2d');
	}

	componentDidMount() {
		console.log(this.ctx);
	}

	renderCanvas = (data: IpaintCord[]): void => {
		console.log(data, this.canvas);
	};

	render() {
		const { data } = this.props;
		this.renderCanvas(data);
		return (
			<div>
				<h1>canvas</h1>
				<canvas ref={this.canvas} />
			</div>
		);
	}
}

export default Whiteboard;
