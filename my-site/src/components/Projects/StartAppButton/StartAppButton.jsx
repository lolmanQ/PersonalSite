import React from 'react';
import './StartAppButton.scss';
import { NavLink } from 'react-router-dom';

class StartAppButton extends React.Component{
	render(){
		return (
			<div className="Start-App-btn">
				<a href={this.props.URL}>
					<button className="button">
						<p>Launch app</p>
					</button>
				</a>
			</div>
		);
	}
}

export default StartAppButton;
