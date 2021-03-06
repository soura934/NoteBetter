import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/app/notes" />
      }
    />
  );
const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
  
  const msp = state => {
    return { loggedIn: Boolean(state.session.id) };
  };
  
  export const AuthRoute = withRouter(connect(msp)(Auth));
  export const ProtectedRoute = withRouter(connect(msp)(Protected));
