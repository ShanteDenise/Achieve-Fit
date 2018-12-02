import React from 'react';
import { Route, Redirect ***REMOVED*** from 'react-router-dom';
import { connect ***REMOVED*** from 'react-redux';
import PropTypes from 'prop-types';

//Brings in auth and component. If the user is authenticated render component if not redirect to the login page
const PrivateRoute = ({ component: Component, auth, ...rest ***REMOVED***) => (
  <Route
    {...rest***REMOVED***
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props***REMOVED*** />
      ) : (
        <Redirect to="/login" />
      )
    ***REMOVED***
  />
);   


   PrivateRoute.propTypes = {
      auth: PropTypes.object.isRequired,
    ***REMOVED***;

    const mapStateToProps = state => ({
        auth: state.auth
      ***REMOVED***);
      


export default connect(mapStateToProps)(PrivateRoute)