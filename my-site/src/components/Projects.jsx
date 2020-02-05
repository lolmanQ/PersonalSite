import React from 'react';
import '../bulmaswatch.min.css';
import '../App.scss';
import './Projects.scss';
import NavBar from './NavBar.jsx';
import ProjectBox from './ProjectBox/ProjectBox.jsx';


class Projects extends React.Component{
	render(){
		return (
			<div className="App grid-container">
				<header className="box">
					<h1>Projects</h1>
				</header>
				<NavBar />
				<main>
					<ProjectBox header="TestImg" mainText="realText"/>
					<ProjectBox header="TestImg" mainText="realText"/>
					<ProjectBox header="TestImg" mainText="realText"/>
					<ProjectBox header="TestImg" mainText="realText"/>
				</main>
			</div>
		);
	}
}

export default Projects;
