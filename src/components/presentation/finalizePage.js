import React from "react";
import ResumePreview from './resumePreview'
import  jsPDF  from "jspdf";
import html2canvas from 'html2canvas';
import { connect } from "react-redux";
import {useFirestore} from 'react-redux-firebase'

   function Finalize(props) {
    // getting all neccesary data from the props
    let educationSection= props.educationSection
    let contactSection=props.contactSection
    let documentd=props.document
    let firestore = useFirestore()
  
    // user can save the resume data to database
    const saveToDatabase= async()=>{
     //add or update to firestore
    //  getting the reference of the user collection from our firebase firestore
      let user = await firestore.collection('users').doc(props.auth.uid).get()
      user = user.data()
      console.log(user)

      // preparing our object to upload
      let obj
      if(user.resumeIds!=undefined){
          // If user resume ids are not empty then spreading it ans updating rest of the education
          obj = {...user.resumeIds,[documentd.id]:{educationSection:educationSection,contactSection:contactSection,document:documentd}}
      }else{
        // If user is updating for the first time then creating the object
          obj = {[documentd.id]:{educationSection:educationSection,contactSection:contactSection,document:documentd}}
      }
      // now updating resume ids with the obj created above accordingly
      await firestore.collection('users').doc(props.auth.uid).update({
        resumeIds : obj
      })
    }

    // by clicking on download resume button user will be able to download the resume in pdf format
     const downloadResume=()=> {
    
      // capturing the resume preview element
       const input = document.getElementById('resumePreview');
      console.log(document)
      // converting it to canvas object
       html2canvas(input)
         .then((canvas) => {
          // converting canvas to image
           const imgData = canvas.toDataURL('image/png');
           const pdf = new jsPDF("p", "mm", "a4");
           var width = pdf.internal.pageSize.getWidth();
           var height = pdf.internal.pageSize.getHeight();
          //  now converting this image to pdf format
           pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
           // pdf.output('dataurlnewwindow');
          //  finally saving this as a pdf
           pdf.save("resume.pdf");
         }).catch(function(error){
          // if any error, then displaying the error
           console.log(error)
         })
     }
    return (
      <div className="container full finalize-page" >
      <div className="funnel-section ">
          <div className="finalize-preview-card " id="resumePreview">
            {/* passing the object of contact and education and skin code */}
            <ResumePreview contactSection={props.contactSection} educationSection={props.educationSection} skinCd={props?.document?.skinCd}></ResumePreview>   
          </div>
          <div className="finalize-settings center">            
              <div className=" download-resume resume-options">
                <p className="no-margin"  >
                  Download Resume As PdF
                </p>
                    <a style={{cursor:'pointer'}}  onClick={downloadResume}  >download Resume</a>
             </div>
             <div className=" download-resume resume-options">
                <p className="no-margin"  >
                 Save to Database
                </p>
                    <a style={{cursor:'pointer'}}  onClick={saveToDatabase}  >Save to Database</a>
             </div>
        </div>
      </div>
    </div>
    )   
}


// mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
// It's frequently referred to as just mapState for short. It is called every time the store state changes.

// returning document, contact, education and auth states as document, contactsection, educationsection and auth
const mapStateToProps = (state) => {
  return{
    document : state.document,
    contactSection : state.contact,
    educationSection : state.education,
    auth:state.firebase.auth
  }
}

export default connect(mapStateToProps)(Finalize)


