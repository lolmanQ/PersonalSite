import React from 'react';
import '../App.scss';
import './About.scss';
import me from '../me.jpg';

import NavBar from './NavBar/NavBar.jsx';


class About extends React.Component{
	render(){
		return (
			<div className="App grid-container">
				<header className="box">
					<h1>About</h1>
				</header>
				<NavBar/>
				<main className="about">
					<div className="box">
						<h2>About me</h2>
						<img src={me} alt=""/>
						<p>My name is Elias Böök i'm an web and c# programmer</p>
					</div>
				</main>
			</div>
		);
	}
}

export default About;
