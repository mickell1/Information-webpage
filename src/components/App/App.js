import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../../pages/Home';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import Photos from '../Photo';
import CoursesList from '../Course/CoursesList';
import Contact from '../Contact';
import NotFound from '../NotFound';
import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.PHOTOS} component={Photos} />
        <Route path={ROUTES.COURSES_LIST} component={CoursesList} />
        <Route path={ROUTES.CONTACT} component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
