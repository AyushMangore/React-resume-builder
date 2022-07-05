import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './redux/reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

// defining firebase confing created in firebase
const firebaseConfig = {
  apiKey: "AIzaSyCM9W8TC_kpY2JPZaIbPuA8MW887X5FiyM",
  authDomain: "resume-builder-b0f3d.firebaseapp.com",
  projectId: "resume-builder-b0f3d",
  storageBucket: "resume-builder-b0f3d.appspot.com",
  messagingSenderId: "990854375496",
  appId: "1:990854375496:web:e005b4b14e0ffb6ba9d07d"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore()


// binding for redux to get firestore
// Middleware is the suggested way to extend Redux with custom functionality. 
// Middleware lets you wrap the store's dispatch method for fun and profit. 
//The key feature of middleware is that it is composable.
const reduxStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)))

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
); 