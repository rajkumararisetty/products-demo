/*
 * src/store.js
 * No initialState
*/
import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function ConfigureStore(initialState={}) {
 return createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(),
 );
}
