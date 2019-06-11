import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { setCart } from './Utils/storageCart';

//REDUCERS
import cartReducer from './Reducers/cartReducer';

function logger({ getState }) {
  return next => action => {
    const returnValue = next(action);
    setCart(getState());
    return returnValue;
  }
}

const store = createStore(cartReducer, compose(applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(<Provider store={ store }><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
