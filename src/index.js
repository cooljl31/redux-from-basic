import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import PromiseMiddleware from 'redux-promise';
import Reducer from './reducers/index';
import Routes from './routes';

const createStoreWithMiddleware = applyMiddleware(
  PromiseMiddleware
)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(Reducer)} >
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
</Provider>
, document.getElementById('root'));
