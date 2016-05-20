import React from 'react'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './app'
import Home from './components/home'


/** routing logic and root render method for the application.
 *  Not much routing going on here.. but technically this is where it would be
*/
render (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home}/>
    </Route>
  </Router>,
  document.getElementById('container')
);