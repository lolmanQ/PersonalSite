import './bulmaswatch1.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import Projects from './components/Projects/Projects.jsx';
import About from './components/About.jsx';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
 
class App extends Component {
	async getData(){
		let apiName = 'siteAPI';
    	let path = '/items';
    	let myInit = { // OPTIONAL
        	headers: {} // OPTIONAL
    	}
    	return await API.get(apiName, path, myInit);
	}
	
  render() {
    return (      
       <BrowserRouter>
        <div>{console.log(this.getData())}
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Projects" component={Projects}/>
			 <Route path="/About" component={About}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;