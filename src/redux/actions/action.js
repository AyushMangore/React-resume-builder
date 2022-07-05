// Actions: Actions are a plain JavaScript object that contains information. Actions are the only source of information for the store. 
// Actions have a type field that tells what kind of action to perform and all other fields contain information or data.

// below two are the actions for setting and updating skin of the resume
export const SET_SKIN = 'SET_SKIN';
export const UPDATE_SKIN = 'UPDATE_SKIN';

// below two are the actions for setting and updating contact of the resume
export const SET_CONTACT = 'SET_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';

// below two are the actions for setting and updating education details of the resume
export const SET_EDUCATION = 'SET_EDUCATION';
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION';

// below actions are associated with sign in process
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'

// below actions are associated with sign up process
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'

// below actions are associated with sign out process
export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST'
export const SIGN_OUT_FAILED = 'SIGN_OUT_FAILED'
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'

// below action is to remove error status if any
export const REMOVE_ERROR = 'REMOVE_ERROR'