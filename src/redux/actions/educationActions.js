// Actions: Actions are a plain JavaScript object that contains information. Actions are the only source of information for the store. 
// Actions have a type field that tells what kind of action to perform and all other fields contain information or data.

//  here education actions are developed in this file

import * as educationActions from './action';

// this function will return the set education action and education object as payload
export const setEducation = (education) => {
    return{
        type : educationActions.SET_EDUCATION,
        payload : education
    }
}

// this function will return the update education action and education object as payload
export const updateEducation = (education) => {
    return{
        type : educationActions.UPDATE_EDUCATION,
        payload : education
    }
}