// Actions: Actions are a plain JavaScript object that contains information. Actions are the only source of information for the store. 
// Actions have a type field that tells what kind of action to perform and all other fields contain information or data.

//  here authentication actions are developed in this file

import * as authActions from './action'

// request for signing up
const registerReq = () => {
    return {
        type : authActions.SIGN_UP_REQUEST
    }
}

// If sign up failed this method will return error message 
const registerFail = (err) => {
    return {
        type : authActions.SIGN_UP_FAILED,
        payload : err.message
    }
}

// success sign up request
const registerSuc = () => {
    return{
        type : authActions.SIGN_UP_SUCCESS
    }
}

// remove error
const removeError = () => {
    return {
        type : authActions.REMOVE_ERROR
    }
}

// In this function register logic has been developed
export const register = (userData) => {

    return (dispatch,getState,{getFirebase,getFirestore}) => {
        // dispatching sign up request
        dispatch(registerReq())
        // getting references of fire base and fire store
        const firebase = getFirebase();
        const firestore = getFirestore();
        // we have predefind api for signing up the user provided by firebase takes user's email and password
        firebase.auth().createUserWithEmailAndPassword(userData.email,userData.password).then( async(data) => {
            // we will create a colllection with the name of users and assign a user id
            // we will save two things first is email and another object to store the information related to resume
            const res = await firestore.collection('users').doc(data.user.uid).set({
                email : userData.email,
                resumeIds : []
            })
            // after this we will dispatch registration successful method
            dispatch(registerSuc())
        }).catch((err) => {
            // if any error occurs then dispatching registration fail method
            dispatch(registerFail(err))
            setTimeout(() => {
                // after two seconds error will be removed
                dispatch(removeError())
            },2000)
        })
    }
}



// request for sing in
const signinReq = () => {
    return {
        type : authActions.SIGN_IN_REQUEST
    }
}

// if sign in failed this method will return the error
const signinFail = (err) => {
    return {
        type : authActions.SIGN_IN_FAILED,
        payload : err.message
    }
}

// signed in successfully
const signinSuc = () => {
    return{
        type : authActions.SIGN_IN_SUCCESS
    }
}


// In this function sign in logic has been developed
export const signin = (userData) => {
    return async(dispatch,getState,{getFirebase,getFirestore}) => {
        // dispatching sign up request
        dispatch(signinReq())
        // getting references of fire base and fire store
        const firebase = getFirebase();
        const firestore = getFirestore();
        // we have predefind api for signing in the user provided by firebase takes user's email and password
        try{
            const res = await firebase.auth().signInWithEmailAndPassword(userData.email,userData.password)
            // after this we will dispatch sign in successful method
            dispatch(signinSuc())
        }catch(err){
            // if any error occurs then dispatching sign in fail method
            dispatch(signinFail(err))
            setTimeout(() => {
                dispatch(removeError())
                // after two seconds error will be removed
            },2000)
        }
    }
}

// In this function sign out logic has been developed
export const signout = () => {
    return async(dispatch,getState,{getFirebase,getFirestore}) => {
        // getting reference of fire base
        const firebase = getFirebase();
        // we have predefined method for signing out
        firebase.auth().signOut().then(() => {
            // after this we will dispatch sign out successful method
            dispatch({type:authActions.SIGN_OUT_SUCCESS})
        }).catch((err) => {
            // if any error occurs then dispatching sign in fail method
            dispatch({type:authActions.SIGN_OUT_FAILED,payload:err})
            setTimeout(() => {
                // after two seconds error will be removed
                dispatch(removeError())
            },2000)
        })
    }
}