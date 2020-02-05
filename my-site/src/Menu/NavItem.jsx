import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem(props) {
  return (
	<div className="navbar-item">
		<NavLink to={"/" + props.page}>{props.text}</NavLink>
	</div>
  );
}

export default NavItem;
