// Author - Ayush Mangore
// This is a resume builder project, made with the help of react js in front end and used firebase as a backend service
// Users can access the templates only when they are signined in after which user will enter necessary details like educational qualifications etc.
// then resume will be generated accoringly


// Use Redux to manage application state
// React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, 
// and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to 
// manage state through a unidirectional data flow model. React Redux is conceptually simple. It subscribes to the Redux store, 
// checks to see if the data which your component wants have changed, and re-renders your component.

// Actions: Actions are a plain JavaScript object that contains information. Actions are the only source of information for the store. 
// Actions have a type field that tells what kind of action to perform and all other fields contain information or data.

// Reducer function. The reducer is a pure function that accepts 2 parameters: the current state and an action object. 
// Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state.

// mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
// It's frequently referred to as just mapState for short. It is called every time the store state changes.

// Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch. 
// It lets you provide action dispatching functions as props.

// The connect() function connects a React component to a Redux store. 
// It provides its connected component with the pieces of the data it needs from the store, 
// and the functions it can use to dispatch actions to the store.

import React from 'react';
import logo from "../../static/images/resume.png";
import { NavLink } from "react-router-dom";


const Lp = () => {
    return (    
    
        <div className="container  lp-page center">          
        <div className="section">
         <h1>Create a resume that stands out</h1>
           <p >Create a Resume that perfectally describes your skils and match job profile.</p>
            <br></br>
           <div >
            {/* On the click of set started page user will redirected to getting started page */}
                <NavLink to="/getting-started"  className="btn hvr-float-shadow"><span>Get Started for Free</span>
                </NavLink>
                
                </div>
                <img src={logo}   className="lp-resume" alt="logo" />
         </div>        
         </div>
    
        );
}
 
export default Lp;