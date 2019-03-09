import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];


const intialState = {};

const store = createStore(
    rootReducer, 
    intialState,
    compose(
        applyMiddleware(...middleware)
    )
);

export default store;
