// Actions: Actions are a plain JavaScript object that contains information. Actions are the only source of information for the store. 
// Actions have a type field that tells what kind of action to perform and all other fields contain information or data.

//  here skin actions are developed in this file

import * as documentActions from '../actions/action';
import { v4 as uuidv4 } from 'uuid';

// this function  will return the set skin action and random id and skin code as payload
export const setSkin = (skinCd) => {
    return{
        type : documentActions.SET_SKIN,
        payload : {
            id : uuidv4(),
            skinCd : skinCd
        }
    }
}

// this function  will return the update skin action and skin code as payload
export const updateSkin = (skinCd) => {
    return{
        type : documentActions.UPDATE_SKIN,
        payload : {
            skinCd : skinCd
        }
    }
}