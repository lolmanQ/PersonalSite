import React from 'react';
import { NavLink } from 'react-router-dom';


class Error extends React.Component{
	render(){
		return (
			<div>
				<h1>ERROR</h1>
				<NavLink to="/">Return home</NavLink>
			</div>
		);
	}
}

export default Error;