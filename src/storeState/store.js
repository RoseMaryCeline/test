import { applyMiddleware, createStore } from 'redux';
import logger  from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

const middleware = routerMiddleware(browserHistory);
const store = createStore(reducers, applyMiddleware(middleware,thunk, logger()));

console.log(store.getState());
// store.subscribe(()=>{
//     console.log('the state has changed' + store.getState())
// })

export default store;

