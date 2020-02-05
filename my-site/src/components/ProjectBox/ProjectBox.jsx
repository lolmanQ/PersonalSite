import React from 'react';
import './ProjectBox.scss';

class ProjectBox extends React.Component{
	render(){
		return (
			<div className="Box Project-Box">
				<img src={this.props.img} alt={this.props.header}/>
				<h3>{this.props.header}</h3>
				<p>{this.props.mainText}</p>
			</div>
		);
	}
}

export default ProjectBox;
