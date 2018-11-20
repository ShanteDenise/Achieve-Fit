
//Boilerplate code for redux and redux dev tools
import {createStore, applyMiddleware, compose***REMOVED*** from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {***REMOVED***;

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, {***REMOVED***, 
    compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS__&& window.__REDUX_DEVTOOLS_EXTENTION__())
)

export default store
