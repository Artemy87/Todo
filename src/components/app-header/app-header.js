import React from "react";

import "./app-header.css";

const AppHeader = ({ done, toDo }) => {
	return (
		<div className="app-header">
			<h1>My Todo List</h1>
			<h5>
				{toDo} more to do, {done} done
			</h5>
		</div>
	);
}

export default AppHeader;
