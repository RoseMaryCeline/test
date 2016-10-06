import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './MainRouter';
import { Provider } from 'react-redux';
import store from './storeState/store';

ReactDOM.render(
<Provider store={store}>
    <MainRouter />
</Provider>,
  document.getElementById('main')
);