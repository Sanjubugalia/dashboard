import React,{useState,useEffect} from 'react'
import "../user/user.css"
import axios from 'axios'


function Newuser() {
const [inpdata, setInpdata] = useState([{username:"", password:"", email:"", phonenum:"",fullname:"", gender:"", address:"", status:""}])
const {username, password, email, phonenum, fullname, gender,address,status}=inpdata


const inputHandler=(e)=>{
setInpdata({...inpdata,[e.target.name]:e.target.value})
console.log({[e.target.name]:e.target.value})
}

const btnclick= async()=>{
        await axios.post("http://localhost:3003/posts");
}

useEffect(()=>{
        btnclick()
})

        return (
                <>
                  
                        <div className='container'>
                                <div className="newusersm">
                                        <h4 className="widgettitle"> New User </h4>
                                        <div className="container">
                                                <label>Name</label><br />
                                                <input type="text" className="inpnewuser" name="username" value={username} onChange={(e)=>{inputHandler(e)}} placeholder="Name" /><br />
                                                <label>Password</label><br />
                                                <input type="text" className="inpnewuser ml-5" name="password" value={password} onChange={(e)=>{inputHandler(e)}} placeholder="Password" /><br />
                                                <label>Phone No.:</label><br />
                                                <input type="text" className="inpnewuser" name="phonenum" value={phonenum} onChange={(e)=>{inputHandler(e)}} placeholder="Phone Number" /><br />
                                                <label>Address:</label><br />
                                                <input type="text" className="inpnewuser" name="address" value={address} onChange={(e)=>{inputHandler(e)}} placeholder="Address" /><br />

                                        </div>
                                </div>

                                <div className="newuserlg float-right">
                                        <h4 className="widgettitle"></h4>
                                        <div className='widgetmember hrclass'>
                                                <label>Full Name</label><br />
                                                <input type="text" className="inpnewuser" name="fullname" value={fullname} onChange={(e)=>{inputHandler(e)}} placeholder="Full Name" /><br />
                                                <label>Gender</label><br />
                                                <input type="text" className="inpnewuser" name="gender" value={gender} onChange={(e)=>{inputHandler(e)}} placeholder="Gender" /><br />
                                                <label>Email:</label><br />
                                                <input type="text" className="inpnewuser ml-5" name="email" value={email} onChange={(e)=>{inputHandler(e)}} placeholder="name@example.com" /><br />
                                                <label>Status:</label><br />
                                                <input type="text" className="inpnewuser" name="status" value={status} onChange={(e)=>{inputHandler(e)}} placeholder="active" /><br />
                                                <button className="btn btn-primary" type="button" onClick={()=>btnclick()}>Button</button>
                                        </div>
                                </div>
                        </div>

                     
                </>
        )
}

export default Newuser