import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router"

function Editpanel() {
  const [inpdata, setInpdata] = useState({ username: "", password: "", email: "", phonenum: "", fullname: "", gender: "", address: "", status: "" })
  const { username, img, password, email, phonenum, fullname, gender, address, status } = inpdata
  const navigate = useNavigate();
  const {paramsid} = useParams();

    const getuser= async(paramsid)=>{
       const res= await axios.get(`http://localhost:3002/posts/${paramsid}`);
      // setInpdata(res.data)   
      console.log(res)
  }

  const inputHandler = (e) => {
    setInpdata({ ...inpdata,[e.target.name]: e.target.value })
    console.log({ [e.target.name]: e.target.value })
  }

  useEffect(() => {
    getuser()
  }, [])

  return (
    <>
      <div className="editpanel float-right">
        <h4 className="widgettitle">Update</h4>
        <div className="container mb-3">
          <label>Name</label><br />
          <input type="text" className="inpnewuser" name="username" value={username} onChange={(e) => {inputHandler(e) }} placeholder="Name" /><br />
          <label>Password</label><br />
          <input type="text" className="inpnewuser ml-5" name="password" value={password} onChange={(e) => {inputHandler(e) }} placeholder="Password" /><br />
          <label>Phone No.:</label><br />
          <input type="text" className="inpnewuser" name="phonenum" value={phonenum} onChange={(e) => {inputHandler(e) }} placeholder="Phone Number" /><br />
          <label>Address:</label><br />
          <input type="text" className="inpnewuser" name="address" value={address} onChange={(e) => {inputHandler(e) }} placeholder="Address" /><br />
          <button type="button" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </>
  )
}

export default Editpanel