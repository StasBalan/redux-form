import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

let reducers = {
    form: formReducer
};

const reducer = combineReducers(reducers);

let store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);