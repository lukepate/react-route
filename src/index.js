import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Submit from './Submit';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  Route ,
  NavLink
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div className ="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">

            <div id="navbar" className="navbar-collapse collapse">
             <ul className="nav navbar-nav">
               <li><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
               <li><NavLink activeClassName="activeNav" to="/submit">About</NavLink></li>
             </ul>
           </div>
          </div>
        </div>
      </nav>
      <Route exact path="/" component={Home}/>
      <Route path="/submit" component={Submit}/>
    </div>
   </Router>,
  document.getElementById('root'));
registerServiceWorker();
