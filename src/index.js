import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App';
import Firebase, { FirebaseContext } from './components/Firebase';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'
// import Home from './pages/Home';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import App from './App'
// import Photos from './components/Photo';
// import CoursesList from './components/Course/CoursesList';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';
import * as serviceWorker from './serviceWorker';

// const routing = (
//   <Router>
//     <div>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/signup" component={SignUp} />
//         <Route exact path="/signin" component={SignIn} />
//         <Route exact path="/app" component={App} />
//         <Route path="/photos" component={Photos} />
//         <Route path="/courses-list" component={CoursesList} />
//         <Route path="/contact" component={Contact} />
//         <Route component={NotFound} />
//       </Switch>
//     </div>
//   </Router>
// )
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>, 
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

