// Reducer function. The reducer is a pure function that accepts 2 parameters: the current state and an action object. 
// Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state.

import * as documentActions from '../actions/action';
import initialState from './initialState.json'

// In this file document states are maintained
const documentReducer = (state=initialState.document,action) => {
    switch(action.type){
        // on set skin action id will be set to payload id and skin code to payload skin code
        case documentActions.SET_SKIN :
            return {...state,id:action.payload.id,skinCd:action.payload.skinCd}
        // on update skin, skin code will be set to payload skin code
        case documentActions.UPDATE_SKIN :
            return {...state,skinCd:action.payload.skinCd}
        default : return state
    }
}

export default documentReducer