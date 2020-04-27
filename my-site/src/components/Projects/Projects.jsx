import React from 'react';
import './Projects.scss';
import NavBar from '../NavBar/NavBar.jsx';
import ProjectBox from './ProjectBox/ProjectBox.jsx';
import logo from '../../logo.svg';
import img1 from '../../Images/VRChat1.png';
import {Route, Switch } from 'react-router-dom';
import ProjectMiniPage from './ProjectMiniPage/ProjectMiniPage.jsx';
import Data from '../../Data/Projects.json';
import image from '../../Images/streetSignsUF.png';


class Projects extends React.Component{
	render(){
		return (
			<div className="App grid-container">
				<header className="box">
					<h1>Projects</h1>
				</header>
				<NavBar />
				<main className="projects">
					
					<Switch>
						<Route path="/Projects" exact>
							{
								Data.map((data, index) => (
									<ProjectBox key={index} header={data.Title} mainText={data.ShortText} img={data.ImgURL} miniPage={data.PageRoute} data={data}/>
								))
							}
						</Route>
						{
							Data.map((data, index) => (
								<Route key={index} path={"/Projects/" + data.PageRoute}><ProjectMiniPage header={data.Title} mainText={data.MainText} img={data.ImgURL} data={data}/></Route>
							))
						}
						<Route path="/Projects/VRChat"><ProjectMiniPage header="VRChat" mainText="I was having fun" img={img1}/></Route>
					</Switch>
				</main>
			</div>
		);
	}
}

export default Projects;
