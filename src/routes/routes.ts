// pages
import Lobby from './../pages/Lobby';
import Room from './../pages/Room/Room';

export interface IRoute {
	label: string;
	path: string;
	component: any;
}

const ROUTES: IRoute[] = [
	{
		label: 'Lobby',
		path: '/lobby',
		component: Lobby
	},
	{
		label: 'Rooms',
		path: '/room',
		component: Room
	}
];

export default ROUTES;
