import React from 'react';
import ItemStatusFilter from '../item-status-filter';

import './app-header.css';

const AppHeader = () => {


	return (
		<div  className="app-header">
			<h1>My Todo List</h1>
			<ItemStatusFilter />
		</div>
	)
}

export default AppHeader;