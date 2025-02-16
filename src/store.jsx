import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'; // Убедись, что у тебя есть reducers/index.js

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;