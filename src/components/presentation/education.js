import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { useHistory } from "react-router-dom";
import { setEducation, updateEducation } from "../../redux/actions/educationActions";
import { connect } from 'react-redux'

function Education(props) {
  console.log('Education');
  // useHistory: This is one of the most popular hooks provided by React Router. 
  // It lets you access the history instance used by React Router. 
  // Using the history instance you can redirect users to another page
  let history = useHistory();
  // defined education state, if already containing the object then it will be retained
  const [education,setEducation]= useState(props.education);

  const onchange = (event) => {
     // with the help of this function we will keep on updating the education state
    // it will be used to render preview functionality 
    var key =event.target.name;
    var val =event.target.value;

    setEducation({...education,[key]:val})
  }

  // if user move back and forth in the page then also content remains as it is and we are storing the event
  const getFieldData=(key)=>{
    // if contact is already containing the event then return the value
    if(education && education[key]){
      return education[key]
    }
    return "";
}

  // when user will click on submit button
  const onSubmit = async(e) => {
     if(props.education != null){
       // if already containing something then update
       props.updateEducation(education)
     }else{
      // set fresh
       props.setEducation(education)
     }
     // now user will be redirected to education
     history.push('/finalize')
  }

    
    return (
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Educational Section</h2>
            <div className="form-section">
              <div className="input-group"><label>College Name</label>
                <div className="effect"><input type="text" name={fieldCd.SchoolName}
                  onChange={onchange} value={getFieldData(fieldCd.SchoolName)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Degree</label>
                <div className="effect"><input type="text" name={fieldCd.Degree}
                  onChange={onchange} value={getFieldData(fieldCd.Degree)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>CGPA</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationCGPA}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationCGPA)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>City/State</label>
                <div className="effect"><input type="text"  name={fieldCd.City}
                  onChange={onchange} value={getFieldData(fieldCd.City)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Month</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationDate}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationDate)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Year</label>
                <div className="effect"><input type="text"  name={fieldCd.GraduationYear}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationYear)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/contact' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            {/* passing the object of contact and education and skin code */}
            <ResumePreview contactSection={props.contact} educationSection={education} skinCd={props?.document?.skinCd}></ResumePreview>            
          </div>
        </div>
      </div>
    );
  }

// mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
// It's frequently referred to as just mapState for short. It is called every time the store state changes.

// returning document, contact and education states as document, contact and education
const mapStateToProps = (state) => {
  return {
    document : state.document,
    contact : state.contact,
    education : state.education
  }
}
  

// Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch. 
// It lets you provide action dispatching functions as props.

// here dispatching seteducation and updateeducation action, we have defined in educationactions
const mapDispatchToProps = (dispatch) => {
  return{
    setEducation : (education) => dispatch(setEducation(education)),
    updateEducation : (education) => dispatch(updateEducation(education)) 
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Education)

