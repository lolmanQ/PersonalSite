import React from 'react';
import './Projects.scss';
import NavBar from '../NavBar/NavBar.jsx';
import ProjectBox from './ProjectBox/ProjectBox.jsx';
import logo from '../../logo.svg';
import img1 from '../../Images/VRChat1.png';
import {Route, Switch } from 'react-router-dom';
import ProjectMiniPage from './ProjectMiniPage/ProjectMiniPage.jsx';


class Projects extends React.Component{
	render(){
		return (
			<div className="App grid-container">
				<header className="box">
					<h1>Projects</h1>
				</header>
				<NavBar />
				<main>
					
					<Switch>
						<Route path="/Projects" exact>
							<ProjectBox header="VRChat" mainText="I was having fun" img={img1} miniPage="vrchat"/>
							<ProjectBox header="TestImg" mainText="realText" img={logo}/>
							<ProjectBox header="TestImg" mainText="realText" img={logo}/>
							<ProjectBox header="TestImg" mainText="realText" img={logo}/>
						</Route>
						<Route path="/Projects/VRChat"><ProjectMiniPage header="VRChat" mainText="I was having fun" img={img1}/></Route>
					</Switch>
				</main>
			</div>
		);
	}
}

export default Projects;
