import './bulmaswatch1.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import Projects from './components/Projects/Projects.jsx';
import About from './components/About.jsx';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Projects" component={Projects}/>
			 <Route path="/About" component={About}/>
            <Route component={Home}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;