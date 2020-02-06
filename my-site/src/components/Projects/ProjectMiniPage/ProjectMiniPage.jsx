import React from 'react';
import './ProjectMiniPage.scss';
import { NavLink } from 'react-router-dom';


class ProjectMiniPage extends React.Component{
	render(){
		return (
			<div className="Project-Page box">
				<img src={this.props.img} alt={this.props.header}/>
				
				<h2>{this.props.header}</h2>
				<p>{this.props.mainText}</p>
				<NavLink to="/projects"><button className="button rounded">Back</button></NavLink>
			</div>
			
		);
	}
}

export default ProjectMiniPage;
