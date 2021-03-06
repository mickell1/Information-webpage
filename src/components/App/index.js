import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../../pages/Home';
import SignUp from '../../pages/SignUp';
import PasswordForgetPage from '../PasswordForget';
import SignIn from '../../pages/SignIn';
import AccountPage from '../../pages/Account'
import Admin from '../../pages/Admin';
import Technology from '../../pages/Technology';
import Photos from '../Photo';
// import Statistics from '../../pages/Statistics';
import Design from '../../pages/Design';
import CoursesList from '../Course/CoursesList';
import Contact from '../Contact';
import NotFound from '../NotFound';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <Header />
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={Admin} />
        <Route path={ROUTES.TECHNOLOGY} component={Technology} />
        <Route path={ROUTES.PHOTOS} component={Photos} />
        {/* <Route path={ROUTES.STATISTICS} component={Statistics} /> */}
        <Route path={ROUTES.DESIGN} component={Design} />
        <Route path={ROUTES.COURSES_LIST} component={CoursesList} />
        <Route path={ROUTES.CONTACT} component={Contact} />
        <Route component={NotFound} />
      </Switch>
    <Footer />
  </Router>
);

export default withAuthentication(App);
