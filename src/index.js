import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'
import Home from './pages/Home';
import App from './App'
import Photos from './components/Photos';
import CoursesList from './components/CoursesList';
import Contact from './components/Contact';
import NotFound from './components/notfound';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      {/* <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/app">App</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/photos">Photos</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/courses-list">CoursesList</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
        </li>
      </ul> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/app" component={App} />
        <Route path="/photos" component={Photos} />
        <Route path="/courses-list" component={CoursesList} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

