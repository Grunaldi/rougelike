import React from "react"
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import * as ROUTES from '../../constants/routes';
import LandingPage from "../../pages/Landing";
import SingUp from "../../pages/SignUp";
import SingIn from "../../pages/SignIn";
import PasswordForget from "../../pages/PasswordForget";
import Home from "../../pages/Home";
import Account from "../../pages/Account";
import Admin from "../../pages/Admin";

import {withAuthentication} from "../../utils/Session";

function App() {
  return(
      <Router>
          <Navigation />
          <Route exact path={ROUTES.LANDING} component={LandingPage}/>
          <Route  path={ROUTES.SIGN_UP} component={SingUp}/>
          <Route  path={ROUTES.SIGN_IN} component={SingIn}/>
          <Route  path={ROUTES.PASSWORD_FORGET} component={PasswordForget}/>
          <Route  path={ROUTES.HOME} component={Home}/>
          <Route  path={ROUTES.ACCOUNT} component={Account}/>
          <Route  path={ROUTES.ADMIN} component={Admin}/>
      </Router>
  )
}

export default withAuthentication(App);
