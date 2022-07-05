// Reducer function. The reducer is a pure function that accepts 2 parameters: the current state and an action object. 
// Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state.

import * as contactActions from '../actions/action';
import initialState from './initialState.json'

// In this file contact states are maintained
const contactReducer = (state=initialState.contact,action) => {
    switch(action.type){
        // on set contact action contact payload will be returned simply
        case contactActions.SET_CONTACT :
            return {...action.payload}
        // on update contact action contact payload will be returned simply
        case contactActions.UPDATE_CONTACT :
            return {...action.payload}
        default : return state
    }
}

export default contactReducer