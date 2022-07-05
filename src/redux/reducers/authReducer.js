// Reducer function. The reducer is a pure function that accepts 2 parameters: the current state and an action object. 
// Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state.

import * as authActions from '../actions/action'
import initalState from './initialState.json'

// In this file auth states are maintained
const authReducer = (state=initalState.auth,action) => {
    switch(action.type){
        // on sign up action loading state will be changed to true
        case authActions.SIGN_UP_REQUEST : 
            return {...state,loading:true}
        // on sign up success loading state will be changed to false
        case authActions.SIGN_UP_SUCCESS :
            return {...state,loading:false}
        // on sign up failed loading state will be changed to false and we will return the action payload containing error information
        case authActions.SIGN_UP_FAILED :
            return {...state,loading:false,error:action.payload}
        // on sign in action loading state will be changed to true
        case authActions.SIGN_IN_REQUEST :
            return {...state,loading:true}
        // on sign in success loading state will be changed to false
        case authActions.SIGN_IN_SUCCESS :
            return {...state,loading:false}
        // on sign in failed loading state will be changed to false and we will return the action payload containing error information
        case authActions.SIGN_IN_FAILED :
            return {...state,loading:false,error:action.payload}
        // on remove error loading state will set to empty string
        case authActions.REMOVE_ERROR :
            return {...state,error:''}
        default : return state
    }
}


export default authReducer