import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

import { getAllShops, getAllProducts, getAllOptions } from './actions'

const store = createStore(reducers, applyMiddleware(thunk))

store.dispatch(getAllShops())
store.dispatch(getAllProducts())
store.dispatch(getAllOptions())

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'));

registerServiceWorker();
