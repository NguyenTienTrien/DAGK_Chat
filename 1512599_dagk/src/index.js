import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
	    apiKey: "AIzaSyAhjNyuKZhDkk_TDxixg52kHQHT7stgCH4",
    authDomain: "dagk-956eb.firebaseapp.com",
    databaseURL: "https://dagk-956eb.firebaseio.com",
    projectId: "dagk-956eb",
    storageBucket: "dagk-956eb.appspot.com",
    messagingSenderId: "265919908972"
}
firebase.initializeApp(firebaseConfig)

const rrfConfig = {
  userProfile: 'users',
  enableLogging: false, 
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), 
)(createStore)


const rootReducer = combineReducers({
  firebase: firebaseReducer,
})

const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)


ReactDOM.render(
	<Provider store = { store }>
		<App />
	</Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
