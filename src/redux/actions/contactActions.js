// Actions: Actions are a plain JavaScript object that contains information. Actions are the only source of information for the store. 
// Actions have a type field that tells what kind of action to perform and all other fields contain information or data.

//  here contact actions are developed in this file

import * as contactActions from './action';

// this function  will return the set contact action and contact object as payload
export const setContact = (contact) => {
    return{
        type : contactActions.SET_CONTACT,
        payload : contact
    }
}

// this function  will return the update contact action and contact object as payload
export const updateContact = (contact) => {
    return{
        type : contactActions.UPDATE_CONTACT,
        payload : contact
    }
}