import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Brings in auth and component. If the user is authenticated render component if not redirect to the login page
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);   


   PrivateRoute.propTypes = {
      auth: PropTypes.object.isRequired,
    };

    const mapStateToProps = state => ({
        auth: state.auth
      });
      


export default connect(mapStateToProps)(PrivateRoute)