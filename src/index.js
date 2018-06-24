import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ConfigureStore from './store/ConfigureStore';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/App';

const store = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
