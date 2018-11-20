import {createStore, applyMiddleware***REMOVED*** from 'redux';
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = createStore(() => [], {***REMOVED***, applyMiddleware(...middleware))

export default store