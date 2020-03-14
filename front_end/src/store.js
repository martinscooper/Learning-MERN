import {createStore, applyMiddelware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddelware(...middleware),
    window.__REDUC_DEVTOOLS_EXTENSION__ && Window.REDUC_DEVTOOLS_EXTENSION__()
));

export default store;