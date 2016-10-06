import { combineReducers } from 'redux';
import listItemReducer from './listItemReducer';
import formReducer from './FormReducer';
import { routerReducer } from 'react-router-redux';
import importReducer from './importReducer';

const reducers = combineReducers({
    headerCheckItems: listItemReducer,
    formInputs: formReducer,
    importReducer: importReducer,
    routing: routerReducer
});

export default reducers;