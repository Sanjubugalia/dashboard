import React from 'react'
import "../user/user.css"

function Newuser() {
  return (
  <>
  <div className='container'>
  <div className="newusersm">
          <h4 className="widgettitle"> New User </h4>
          
          <div className="container">
  <lable>Name</lable><br/>
   <input type="text" className="inpnewuser" placeholder="Name"/><br/>
   <lable>Password</lable><br/>
  <input type="text" className="inpnewuser ml-5" placeholder="Password"/><br/>
   <lable>Phone No.:</lable><br/>
   <input type="text" className="inpnewuser" placeholder="Phone Number"/><br/>
    <lable>Address:</lable><br/>
    <input type="text" className="inpnewuser" placeholder="Address"/><br/>
    <button class="btn btn-primary" type="button">Button</button>
</div>
          </div>

  <div className="newuserlg float-right">
        <h4 className="widgettitle"></h4>
        <div className='widgetmember hrclass'>
        <lable>Full Name</lable><br/>
   <input type="text" className="inpnewuser" placeholder="Full Name"/><br/>
   <lable>Gender</lable><br/>
   <input type="text" className="inpnewuser" placeholder="Gender"/><br/>
        <lable>Email:</lable><br/>
  <input type="text" className="inpnewuser ml-5" placeholder="name@example.com"/><br/>
   <lable>Active:</lable><br/>
    <input type="text" className="inpnewuser" placeholder="active"/><br/>
            </div>
            </div>
            </div>

  
  </>
  )
}

export default Newuser