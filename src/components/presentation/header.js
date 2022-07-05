import React from "react";
// The connect() function connects a React component to a Redux store. 
// It provides its connected component with the pieces of the data it needs from the store, 
// and the functions it can use to dispatch actions to the store.
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";
import {isLoaded,isEmpty} from 'react-redux-firebase'
import * as authActions from '../../redux/actions/authActions'

function LoggesOut(props) {
  const auth = props.auth
  return (
    <ul>
      <li className="signup ">
        {/* on clicking register user will be redirected to register page */}
        <NavLink className=" btnv-1" to="/register">
        Register
        </NavLink>
      </li>
      <li className="signin"> 
        {/* on clicking register user will be redirected to sign in page */}
        <NavLink className="text-blue btnv-3" to="/login">
        Sign In
        </NavLink>         
      </li>
    </ul>
  )
}

const Header = (props) => {
  const auth = props.auth;

  // if user will click on log out then simply log out
  const handleLogOut=()=>{
   props.signOut()
   console.log('The user will sign out');
  }

  return (
  <header className="header">
  <nav className="nav">
      <a href="/" className="holder-logo">
        <img className='logo' src={logo}></img>
      </a> 
        <div className="header-links full-height">

        {/* if user auth is loaded and not empty then denoting logged in successfully */}
        { isLoaded(auth) && !isEmpty(auth) ?<>

          <ul>
            <li className="signin ">
              <NavLink className="  " to="/">
                {/* directing to landing page and displaying user's email */}
               Logged in as {auth.email}
              </NavLink>
            </li>
            <li className="signin"> 
            {/* And user will have the option to sign out */}
              <button className="text-blue btnv-3" onClick={handleLogOut}>
             Signout
              </button>         
            </li>
          </ul>

        </>:
        // else if user be treated as logged out user
        <LoggesOut></LoggesOut>}
          
          <ul id="nav-mid">
            <li>
              {/* on clicking on resume templates user will be redirected to resume templates page */}
            <NavLink className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
            </NavLink>
            </li> 
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/about-us">
                {/* on clicking on about us user will be redirected to about us page */}
              About Us
              </NavLink>
            </li>        
          </ul>
            
      </div>   
    </nav>
  </header>

  );
};

// mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
// It's frequently referred to as just mapState for short. It is called every time the store state changes.

// returning firebase auth state as auth
const mapStateToProps=(state)=>{
  return{
     auth: state.firebase.auth
  }
}
// Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch. 
// It lets you provide action dispatching functions as props.

// here dispatching sign out action, we have defined in authactions
const mapDispatchToProps= (dispatch)=>{
  return {
   signOut:()=>dispatch(authActions.signout())
  }
}

// connecting components to redux store
export default connect(mapStateToProps,mapDispatchToProps)(Header);
