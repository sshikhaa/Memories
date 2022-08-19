// //in this file we re going to connect our react application to index html file

// //here we'll initialise redux
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';//provider is going to keep track of that store which is that global state & that allows us to acsess that store from anywhere inside of the app
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

// import { reducers } from './reducers';
// import App from './App';
// import './index.css';

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
// componets
import App from './App';
// styles
import './index.css';

// creating redux to pass all the data to app components
const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);