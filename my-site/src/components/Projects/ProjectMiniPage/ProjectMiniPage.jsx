import React from 'react';
import './ProjectMiniPage.scss';
import { NavLink } from 'react-router-dom';
import StartAppButton from '../StartAppButton/StartAppButton.jsx';


class ProjectMiniPage extends React.Component{
	render(){
		return (
			<section className="Project-Page box">
				<img src={this.props.img} alt={this.props.header}/>
				
				<h2>{this.props.header}</h2>
				<p>{this.props.mainText}</p>
				<NavLink to="/projects"><button className="button rounded">Back</button></NavLink>
				<StartAppButton URL={this.props.data.URL}/>
			</section>
			
		);
	}
}

export default ProjectMiniPage;
