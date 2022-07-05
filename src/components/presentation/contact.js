import React,{useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
import {fieldCd, skinCodes}  from '../../constants/typeCodes';
import { useHistory } from "react-router-dom";
import ResumePreview from './resumePreview'
import {setContact,updateContact} from '../../redux/actions/contactActions'
import { connect } from 'react-redux';

function Contact(props) {

    // useHistory: This is one of the most popular hooks provided by React Router. 
    // It lets you access the history instance used by React Router. 
    // Using the history instance you can redirect users to another page

   let history = useHistory();

   // defined contact state, if already containing the object then it will be retained
   const [contact,setContact]= useState(props.contact);

useEffect(() => {
    if(props.document.id == null){
        history.push('/getting-started')
    }
})
  
 

  const onchange=(event)=>{
    // with the help of this function we will keep on updating the contact state
    // it will be used to render preview functionality 
        var key =event.target.name;
        var val =event.target.value;
        setContact({...contact,[key]:val})
    }

    // when user will click on submit button
    const onSubmit= async()=>{
        if(props.contact != null){
            // if already containing something then update
            props.updateContact(contact)
        }else{
            // set fresh
            props.setContact(contact)
        }
        // now user will be redirected to education
        history.push('/education');
    }


    // if user move back and forth in the page then also content remains as it is and we are storing the event
    const getFieldData=(key)=>{
        // if contact is already containing the event then return the value
        if(contact && contact[key]){
          return contact[key]
        }
        return "";
    }
    
    return (
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Personal Details</h2>
                    <div className="form-section">
                        <div className="input-group"><label>First Name</label>
                            <div className="effect"><input type="text" name={fieldCd.FirstName} value={getFieldData(fieldCd.FirstName)}  onChange={onchange}  /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Last Name</label>
                            <div className="effect"><input type="text" name={fieldCd.LastName}  value={getFieldData(fieldCd.LastName)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group full"><label>Professional Summary</label>
                            <div className="effect"><input type="text" name={fieldCd.ProfSummary}   value={getFieldData(fieldCd.ProfSummary)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Email</label>
                            <div className="effect"><input type="text"  name={fieldCd.Email}  value={getFieldData(fieldCd.Email)}  onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Phone</label>
                            <div className="effect"><input type="text"  name={fieldCd.Phone}   value={getFieldData(fieldCd.Phone)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Profession</label>
                            <div className="effect"><input type="text"  name={fieldCd.Profession}  value={getFieldData(fieldCd.Profession)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Street</label>
                            <div className="effect"><input type="text" name={fieldCd.Street}   value={getFieldData(fieldCd.Street)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>City</label>
                            <div className="effect"><input type="text" name={fieldCd.City}  value={getFieldData(fieldCd.City)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>State</label>
                            <div className="effect"><input type="text"   name={fieldCd.State}  value={getFieldData(fieldCd.State)}  onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>


                        <div className="input-group"><label>Country</label>
                            <div className="effect"><input type="text"  name={fieldCd.Country}  value={getFieldData(fieldCd.Country)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Pin Code</label>
                            <div className="effect"><input type="text" name={fieldCd.ZipCode}  value={getFieldData(fieldCd.ZipCode)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="form-buttons">
                            <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                            <NavLink to='/getting-started'  className="center">Back</NavLink>
                        </div>
                    </div>

                </div>

                <div className="preview-card">
                    {/* passing the object of contact and skin code */}
                    <ResumePreview contactSection={contact} skinCd={props?.document?.skinCd}></ResumePreview>
                </div>

            </div>
        </div>
    );
}

// mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
// It's frequently referred to as just mapState for short. It is called every time the store state changes.

// returning document and contact states as document and contact
const mapStateToProps = (state) => {
    return{
        document : state.document,
        contact : state.contact
    }
}

// Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch. 
// It lets you provide action dispatching functions as props.

// here dispatching setcontact and updatecontact action, we have defined in contactactions
const mapDispatchToProps = (dispatch) => {
    return{
        setContact : (contact) => dispatch(setContact(contact)),
        updateContact : (contact) => dispatch(updateContact(contact))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact)