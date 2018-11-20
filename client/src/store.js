import {createStore, applyMiddleware***REMOVED*** from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {***REMOVED***;

const middleware = [thunk];

const store = createStore(rootReducer, initialState, {***REMOVED***, applyMiddleware(...middleware))

export default store