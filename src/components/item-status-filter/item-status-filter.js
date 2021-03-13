import React from 'react';

import './item-status-filter'

const ItemStatusFilter = () => {

	const more = 1;
	const done = 3;
	return (
		<h5 className="item-status-filter"> {more} more to do, {done} done </h5>
	)
}

export default ItemStatusFilter;