import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Link} from "react-router-dom"


function Userlist() {
   


  return (
      <>
    <div className='container py-5'>
         <div style={{ height: 400, width: '100%' }}>
         <Link to="/newuser"><button className='newuserbtn fr'>Add User </button></Link>
         <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No.</th>
      <th scope='col'>Transaction </th>
      <th scope='col'>Edit</th>
      <th scope='col'>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>
 
  </tbody>
</table>





    </div>
    </div>
    </>
  )
}

export default Userlist