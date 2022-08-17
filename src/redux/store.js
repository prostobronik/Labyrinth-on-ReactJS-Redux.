import { applyMiddleware, combineReducers, createStore } from 'redux';
import Reducer from './reducer';

const reducers = combineReducers({
   indexData: Reducer
});

const store = createStore(reducers, applyMiddleware());

export default store;
window.store = store;