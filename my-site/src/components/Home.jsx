import React from 'react';
import '../bulmaswatch.min.css';
import '../App.scss';

import NavBar from './NavBar.jsx';


class Home extends React.Component{
	render(){
		return (
			<div className="App grid-container">
				<header className="App-header box">
					<h1>lolman</h1>
				</header>
				<main>
		
				</main>
				<NavBar/>
			</div>
		);
	}
}

export default Home;
