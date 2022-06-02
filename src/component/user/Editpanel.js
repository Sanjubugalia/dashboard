import React from 'react'

function Editpanel() {
  return (
      <>
    <div className="editpanel float-right">
    <h4 className="widgettitle">Edit</h4>
    <div className="container mb-3">
  <lable>Name:</lable><br/>
   <input type="text" className="inputstyle" placeholder="name"/><br/>
  <lable>Email:</lable><br/>
  <input type="text" className="inputstyle ml-5" placeholder="name@example.com"/><br/>
   <lable>Phone No.:</lable><br/>
   <input type="text" className="inputstyle" placeholder="Phone Number"/><br/>
    <lable>Address:</lable><br/>
    <input type="text" className="inputstyle" placeholder="Address"/><br/>
  <button type="button" class="btn btn-primary">Submit</button>
</div>

    </div>
    </>
  )
}

export default Editpanel