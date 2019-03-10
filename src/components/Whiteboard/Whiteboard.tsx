import * as React from 'react';

interface IpaintCord {
	x: number;
	y: number;
	color?: string;
}

interface IProps {
	data: IpaintCord[];
}

interface IState {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
}

class Whiteboard extends React.Component<IProps, IState> {
	private canvasRef: any;
	private ctx: any;

	constructor(props: any) {
		super(props);

		this.canvasRef = React.createRef();
	}

	componentDidMount() {
		const canvas = this.canvasRef.current;
		if (canvas) {
			this.ctx = canvas.getContext('2d');
		}
	}

	midPoint = (p1: any, p2: any) => {
		return {
			x: p1.x + (p2.x - p1.x) / 2,
			y: p1.y + (p2.y - p1.y) / 2
		};
	};

	fixCanvasPosition = (data: IpaintCord[]) => {
		if (data) {
			const newData = data.map(
				(pos: IpaintCord): any => {
					return {
						x: pos.x - this.canvasRef.current.getBoundingClientRect().left,
						y: pos.y - this.canvasRef.current.getBoundingClientRect().top,
						color: pos.color
					};
				}
			);

			return newData;
		}

		return [];
	};

	renderCanvas = (paintData: IpaintCord[]): void => {
		const data = this.fixCanvasPosition(paintData);
		if (data.length < 1) {
			return;
		}
		let p1 = data[0];
		let p2 = data[1];

		console.log(p1, p2);

		this.ctx.beginPath();
		this.ctx.moveTo(p1.x, p1.y);

		for (let i = 1, len = data.length; i < len; i++) {
			const midPoint = this.midPoint(p1, p2);
			this.ctx.lineCap = 'round';
			this.ctx.lineJoin = 'round';
			this.ctx.lineWidth = 5; // data[i].settings.size;
			this.ctx.shadowBlur = 2;
			this.ctx.shadowColor = 'green'; // data[i].settings.color;
			this.ctx.strokeStyle = 'green'; // data[i].settings.color;
			this.ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
			p1 = data[i];
			p2 = data[i + 1];
		}

		this.ctx.stroke();
	};

	render() {
		const { data } = this.props;

		this.renderCanvas(data);
		return (
			<div>
				<h1>canvas</h1>
				<canvas height="1000" width="1000" ref={this.canvasRef} />
			</div>
		);
	}
}

export default Whiteboard;
