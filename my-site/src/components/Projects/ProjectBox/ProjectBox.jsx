import React from 'react';
import './ProjectBox.scss';
import { NavLink } from 'react-router-dom';

class ProjectBox extends React.Component{
	render(){
		return (
			<NavLink to={"/projects/" + this.props.miniPage}>
			<section className="box Project-Box">
				<img src={this.props.img} alt={this.props.header}/>
				<h3>{this.props.header}</h3>
				<p>{this.props.mainText}</p>
			</section>
			</NavLink>
		);
	}
}

export default ProjectBox;
