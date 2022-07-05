import React,{useEffect,useState} from "react";
import update from 'immutability-helper';
// import { connect } from "react-redux";
// import {bindActionCreators} from 'redux';
// import * as authActions from '../../actions/authActions';
// import { isLoaded } from 'react-redux-firebase'

import { signin } from "../../redux/actions/authActions";

// useHistory: This is one of the most popular hooks provided by React Router. 
// It lets you access the history instance used by React Router. 
// Using the history instance you can redirect users to another page
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { async } from "@firebase/util";

  function Login(props) {
    console.log(props);

    let history = useHistory();
    // declared email and set email state using use states
    const [email,setEmail] = useState('');
    // declared password and set password state using use states
    const [password,setPassword]= useState('');


    useEffect(() => {
      // if auth object is not null then redirect to landing page
      if(props.auth?.uid){
        history.push('/')
      }
    }, [props])
    // on entering email update email state
const handleEmail= (e)=>{
setEmail(e.target.value);
}
// on entering password update password state
const handlePassword=(e)=>{
  setPassword(e.target.value);
}
    // on clicking submit button
    const onSubmit=  async()=>{
    
      let obj = {email:email,password:password}
      // console.log(obj)
      // passing email and password to sign in function
      await props.signIn(obj)
      
      // if no errors then redirect to landing page
      if(props.authMine.error==''){
        history.push('/')
      }
    }


    return (
      <>
      {/* If we visit the login being signed in we will be unable to see the form */}
      <>
      {/* if loading then diplay loading message */}
      {props.authMine.loading?<h4 style={{marginTop:'10%',height:'52vh',textAlign:'center'}}>Patiently Wait...we are logging you in</h4>:
          // else asking desired credentials for registering user
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Enter Login details</h2>
                    <div className="form-section">
                        <div className="input-group full"><label>Email</label>
                            <div className="effect"><input type="text" name="email" value={email || ''}  onChange={handleEmail}  /><span></span>
                            </div>
                        </div>

                        <div className="input-group full"><label>Password</label>
                            <div className="effect"><input  type="password" name="password"  value={password || ''} onChange={handlePassword}/><span></span>
                            </div>
                        </div>
                        {props.authMine.error?<div className="input-group full">
                                <span className="error-message" >{props.authMine.error}</span> 
                        </div> :<></>}  
                        <div className="form-buttons">
                            <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Login</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  }
  </>
  
        </>
    );
  }


// mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
// It's frequently referred to as just mapState for short. It is called every time the store state changes.

// returning auth as authmine
 const mapStateToProps = (state) => {
   return{
    authMine : state.auth,
   }
 }

 // Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch. 
// It lets you provide action dispatching functions as props.

// here dispatching sign in action, we have defined in authactions
 const mapDispatchToProps = (dispatch) => {
   return{
     signIn : (userData) => dispatch(signin(userData))
   }
 }


  export default connect(mapStateToProps,mapDispatchToProps)(Login)