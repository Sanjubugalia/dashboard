import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';


function Userlist() {
const [get, setGetdata] = useState([""])
const navigate=useNavigate();


  const btnclick= async()=>{
    const res= await axios.get(`http://localhost:3002/posts`);
    setGetdata(res.data)   
    console.log(res)
}

const deletehandle= async(paramsid)=>{
  await axios.delete(`http://localhost:3002/posts/${paramsid}`);
  alert("Delete Successfully")
  navigate("/userlist")
}

useEffect(()=>{
       btnclick()
},[])


  return (
      <>
    <div className='container py-5'>
    <Link to="/newuser"><button className='newuserbtn fr'>Add User </button></Link>
    
         <div className='scrollbar-div'>
             <table  className="table">
  <thead>
    <tr className=' theadcolor'>
      <th scope="col ">Id</th>
      <th scope="col">Image</th>
      <th scope="col"> Name</th>    
      <th scope='col'>Gender</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No.</th>
      <th scope='col'>Address</th>
      <th scope='col'>Edit</th>
      <th scope='col'>Delete</th>
    </tr>
  </thead>
  <tbody>

    {get.map((elem)=>{
   const { id,username,img, email, phonenum, gender, address } = elem;
      return(
        <>
         <tr className='trowcolor'>
      <th scope="row">{id}</th>
      <td><img src={img} className='userlistimg'  alt="imlk"></img></td>
      <td>{username}</td>
      <td>{gender}</td>
      <td>{email}</td>
      <td>{phonenum}</td>
      <td>{address}</td>         
      <td><button className='btn btn-outline-primary'><Link to={`/edituser/${id}`}>Edit</Link></button></td>
      <td><button className='btn btn-outline-danger'onClick={(paramsid)=>{deletehandle(id)}} >Delete</button></td>
      
    </tr>
 
        </>
      )
    })}
   
  </tbody>
</table>





    </div>
    </div>
    </>
  )
}

export default Userlist