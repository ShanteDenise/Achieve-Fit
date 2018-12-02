
//Boilerplate code for redux and redux dev tools
import { createStore, applyMiddleware, compose ***REMOVED*** from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {***REMOVED***;

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //Add redux devtools extention
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

