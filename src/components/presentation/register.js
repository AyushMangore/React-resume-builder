import React,{useState,useEffect} from "react";
import { connect } from "react-redux";
import { isLoaded } from 'react-redux-firebase'
import { useHistory } from "react-router";
import * as authActions from '../../redux/actions/authActions';

  function Register(props) {
 
    // useHistory: This is one of the most popular hooks provided by React Router. 
    // It lets you access the history instance used by React Router. 
    // Using the history instance you can redirect users to another page

    let history = useHistory();

    // declared email and set email state using use states
    const [email,setEmail] = useState('');
    // declared password and set password state using use states
    const [password,setPassword]= useState('');

    // on entering email update email state
    const handleEmail= (e)=>{
      setEmail(e.target.value);
      }
    
    // on entering password update password state
    const handlePassword=(e)=>{
      setPassword(e.target.value);
    }
   
  // on clicking submit button
  const onSubmit=async()=>{
    
    // passing email and password to register function
    const res = await props.register({email:email, password:password});

    // if auth is not empty then user will redirected to landing page
    if(props.auth!=null){
      history.push('/')
    }
    
  }

 
    return (
      <>
    {/* To save from multiple request */}
      {!isLoaded(props.auth)?<></>:<>
      {/* if loading then diplay loading message */}
        {props.authMine.loading?<h4 style={{marginTop:'10%',height:'52vh',textAlign:'center'}}>Patiently Wait...we are resgistering you in</h4>:
        // else asking desired credentials for registering user
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
               

                    <h2 className="form-heading center">Enter your details</h2>
                    <div className="form-section">
                        <div className="input-group full"><label>Email</label>
                            <div className="effect"><input type="text" name="email" value={email||''}  onChange={handleEmail}  /><span></span>
                            </div>
                        </div>

                        <div className="input-group full"><label>Password</label>
                            <div className="effect"><input  type="password" name="password"  value={password||''} onChange={handlePassword}/><span></span>
                            </div>
                        </div>
                        {props.authMine?.error?<div className="input-group full">
                                <span className="error-message" >{props.authMine?.error}</span> 
                        </div> :<></>}
                        <div className="form-buttons">
                            <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Register</button>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
      }
        </>
  }
  </>
    );
  }

// mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
// It's frequently referred to as just mapState for short. It is called every time the store state changes.

// returning firebase auth state as auth and auth as authmine

const mapStateToProps = (state) => {
  return{
    authMine : state.auth,
    auth : state.firebase.auth
  }
}

// Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch. 
// It lets you provide action dispatching functions as props.

// here dispatching register action, we have defined in authactions

const mapDispatchToProps = (dispatch) => {
  return{
    register : (userData) => dispatch(authActions.register(userData))
  }
}

  export default connect(mapStateToProps,mapDispatchToProps)(Register);