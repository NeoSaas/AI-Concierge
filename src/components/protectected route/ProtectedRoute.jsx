import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../admin portal/LoginPage';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <div>
          <p>You need to log in to view this page.</p>
          <LoginPage/>
        </div>
      )
    }
  />
);

export default ProtectedRoute;
