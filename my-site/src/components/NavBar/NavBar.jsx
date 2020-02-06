import React from 'react';
import NavItem from '../../Menu/NavItem.jsx';
import './NavBar.scss';


class NavBar extends React.Component{
	render(){
		return(
			<nav className="navbar">
				<NavItem page="" text="Home"/>
				<NavItem page="projects" text="Projects"/>
				<NavItem page="about" text="About"/>
			</nav>
		);
	}
}

export default NavBar;
