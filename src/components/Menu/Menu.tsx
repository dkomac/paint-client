import * as React from 'react';
import { Link } from 'react-router-dom';

import { IRoute } from './../../routes/iroutes.interface';

const Menu: React.SFC<any> = ({ routes }) => {
	return (
		<div>
			{routes.map((route: IRoute) => {
				return (
					<Link key={route.path} to={route.path}>
						<button>{route.label}</button>
					</Link>
				);
			})}
		</div>
	);
};

export default Menu;
