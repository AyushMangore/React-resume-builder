import React from 'react'
import { connect } from 'react-redux'
import {Route,Redirect} from 'react-router-dom'
import {isEmpty, isLoaded} from 'react-redux-firebase'


function PrivateRoute({auth,component:Component,...restprops}) {
  return (
    <Route
        {...restprops} render = {(props) => (
          // if auth is not loaded or else empty then redirect to landing page
            isLoaded(auth) && !isEmpty(auth) ?
            <Component {...props}/> :
            <Redirect to='/'/>
        )}
    />
  )
}

// mapping firebase auth state to auth
const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute)