import React, { Component ***REMOVED*** from 'react';
import PropTypes from 'prop-types';
import{ connect ***REMOVED*** from 'react-redux';
import { getCurrentProfile ***REMOVED*** from '../../actions/profileActions';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
    ***REMOVED***
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                
            </div>
        );
    ***REMOVED***
***REMOVED***

export default connect(null, { getCurrentProfile ***REMOVED***)(Dashboard);