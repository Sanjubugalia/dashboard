import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router"

function Productupdate() {
  const [inpdata, setInpdata] = useState([{ productname: "", brand: "", mfgd: "", color: "", price: "",status:"",stock:"" }])
  const {productname, brand, mfgd, color, price,status,stock} = inpdata


  const inputHandler = (e) => {
          setInpdata({ ...inpdata, [e.target.name]: e.target.value })
          console.log({ [e.target.name]: e.target.value })
  }

  const updateproduct = async () => {
    const res = await axios.put("http://localhost:3002/productdata");
    console.log(res)
}

  const getuser = async () => {
          const res = await axios.get("http://localhost:3002/productdata");
          console.log(res)
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
          <input type="text" className="inpnewuser" name="productname" value={productname} onChange={(e) => {inputHandler(e) }} placeholder="Name" /><br />
          <label>Password</label><br />
          <input type="text" className="inpnewuser ml-5" name="brand" value={brand} onChange={(e) => {inputHandler(e) }} placeholder="Password" /><br />
          <label>Phone No.:</label><br />
          <input type="text" className="inpnewuser" name="color" value={color} onChange={(e) => {inputHandler(e) }} placeholder="Phone Number" /><br />
          <label>Address:</label><br />
          <input type="text" className="inpnewuser" name="price" value={price} onChange={(e) => {inputHandler(e) }} placeholder="Address" /><br />

          <button type="button" className="btn btn-primary">Submit</button>
        </div>

      </div>
    </>
  )
}

export default Productupdate