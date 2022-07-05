import React from 'react';
import {skinCodes} from '../../constants/typeCodes';

import { useHistory } from "react-router-dom";

import {setSkin,updateSkin} from '../../redux/actions/documentActions'
import { connect } from 'react-redux';

function GettingStarted(props) {

    // useHistory: This is one of the most popular hooks provided by React Router. 
    // It lets you access the history instance used by React Router. 
    // Using the history instance you can redirect users to another page

     let history = useHistory();

    //  when user will select particular type of skin
     const onChange = async (skinCd) => {

        // if already containing, then update or else set fresh
        if(props.document.id != null){
            props.updateDocument(skinCd)
        }else{
            props.setDocument(skinCd)
        }
        history.push('/contact');
      }

      
        return (
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        // iterating through all the skin codes stored statically
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == 'demo-value'? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    
}
  
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
// It's frequently referred to as just mapState for short. It is called every time the store state changes.

// returning document state as document
const mapStateToProps = (state) => {
    return{
        document : state.document
    }
}

// Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch. 
// It lets you provide action dispatching functions as props.

// here dispatching set document and update document action, defined in document action
const mapDispatchToProps = (dispatch) => {
    return{
        setDocument : (skinCd) => dispatch(setSkin(skinCd)),
        updateDocument : (skinCd) => dispatch(updateSkin(skinCd))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GettingStarted)

