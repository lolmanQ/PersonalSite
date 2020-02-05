import React from 'react';
import '../bulmaswatch.min.css';
import '../App.scss';

import NavBar from './NavBar.jsx';


class About extends React.Component{
	render(){
		return (
			<div className="App grid-container">
				<header className="box">
					<h1>About</h1>
				</header>
				<NavBar/>
				<main>
		
				</main>
			</div>
		);
	}
}

export default About;
