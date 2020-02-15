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


/*
Amplify.configure(awsconfig);

let apiName = 'mySiteData';
let path = '/items'; 
let myInit = { // OPTIONAL
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {  // OPTIONAL
        name: 'param'
    }
}
API.get(apiName, path, myInit).then(response => {
    // Add your code here
}).catch(error => {
    console.log(error.response)
});


console.log(API.get('siteAPI', '/itemse?q=test'));
*/

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
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