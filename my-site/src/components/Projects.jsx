import React from 'react';
import '../bulmaswatch.min.css';
import '../App.scss';
import './Projects.scss';
import NavBar from './NavBar.jsx';
import ProjectBox from './ProjectBox/ProjectBox.jsx';
import logo from '../logo.svg';


class Projects extends React.Component{
	render(){
		return (
			<div className="App grid-container">
				<header className="box">
					<h1>Projects</h1>
				</header>
				<NavBar />
				<main>
					<ProjectBox header="TestImg" mainText="realText" img={logo}/>
					<ProjectBox header="TestImg" mainText="realText" img={logo}/>
					<ProjectBox header="TestImg" mainText="realText" img={logo}/>
					<ProjectBox header="TestImg" mainText="realText" img={logo}/>
				</main>
			</div>
		);
	}
}

export default Projects;
