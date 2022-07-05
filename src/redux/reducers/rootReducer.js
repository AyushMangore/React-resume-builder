// The combineReducers helper function turns an object whose values are different 
// reducing functions into a single reducing function you can pass to createStore . 
// The resulting reducer calls every child reducer, and gathers their results into a single state

import {combineReducers} from 'redux'
import documentReducer from './documentReducer'
import contactReducer from './contactReducer'
import educationReducer from './educationReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import authReducer from './authReducer'

// Encapsulating all other reducers
const rootReducer = combineReducers({
    document : documentReducer,
    contact : contactReducer,
    education : educationReducer,
    firebase : firebaseReducer, 
    firestore : firestoreReducer,
    auth : authReducer
})

export default rootReducer