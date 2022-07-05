// Reducer function. The reducer is a pure function that accepts 2 parameters: the current state and an action object. 
// Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state.

import * as educationActions from '../actions/action';
import initialState from './initialState.json'

// In this file education states are maintained
const educationReducer = (state=initialState.education,action) => {
    switch(action.type){
        // on set education action education payload will be returned simply
        case educationActions.SET_EDUCATION :
            return {...action.payload}
        // on update education action education payload will be returned simply
        case educationActions.UPDATE_EDUCATION :
            return {...action.payload}
        default : return state
    }
}

export default educationReducer