
import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
import "./Profile.css"
import profile2 from "../Assets/profile2.jpg"
import profile from "../Assets/user1.png"
function Profile() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };
  var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Nice, you triggered this alert message!', 'success')
  })
}



  return (
    <>
    
    

<div class="container rounded bg-white mt-5 mb-5  " id="box">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src={profile}/><span class="font-weight-bold">User</span><span class="text-black-50">user@gmail.com</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right"> Update Profile </h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" placeholder="first name" /></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control"  placeholder="surname"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" placeholder="enter phone number" /></div>
                    <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text"  placeholder="enter address line 1" /></div>
                    
                   
                </div>
              
                <div class="mt-5 text-center">
                <>
      <Button onClick={handleClick}>Save</Button>
      {showAlert &&
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
        Profile updated successfully!
        </Alert>
      }
    </>
              


                </div>
               
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Your review</span></div><br/>
                <div class="col-md-12"><label class="labels">Experience with us</label><input type="text"  placeholder="experience"/></div> <br/>
                <div class="col-md-12"><label class="labels">Additional Information</label><input type="text"  placeholder="additional details" /></div>
            </div>
        </div>
    </div>
</div>
<div className='container text-center img-fluid'>

</div>
<img src={profile2} alt="" className=' img-fluid text-center logo' height={600} width={600}/>
    </>


   
  )
}

export default Profile 