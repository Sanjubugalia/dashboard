import React from 'react';
import "../user/user.css"
import {Link} from "react-router-dom"
import {PersonOutline,Today,MailOutline,PhoneAndroid,MyLocation
} from "@material-ui/icons"
import Editpanel from './Editpanel';


function Edituser() {
  return (
    <>
          <div className="container">
          <h4 className="widgettitle"> Edit User <Link to="/newuser">    <button className='btn btn-success createbtn'>Create</button></Link> </h4>
          <hr/>
        <div className="edituser">
          <hr />
          <div className='widgetmember'>
            <img alt='jjjkj' src="https://www.byrdie.com/thmb/nZafQrs8Y0GgP9PhHQkR7laWj1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdn.cliqueinc.com__cache__posts__194213__model-skincare-secrets-194213-1497385825039-main.700x0c-79b04602385344de88dd0a18db51f864-010369ad53b445c88ab1329e01a14d14.jpg" className='widgetsmimg' />
            <span className="memername">kally Marker</span><br />
           
          </div>
          <div className="memberdiv">
            <span className="memberposition">Software Engineer </span><br/>
          
            <div className='postiondisplay'>
              <span className='positionspan'>Edit</span>      
          </div>
          </div>
            <div>
            <span className="accountdetail">Account Detail</span><br />
           <div> 
           <PersonOutline/> <p className='usenm'>Kally Marker</p>
           </div>
           <Today className='dob'/>
            <p className='userdob'>10.12.1999 </p>      
            </div>

            <div>
            <span className="accountdetail">Account Detail</span><br />
           <div> 
           <PhoneAndroid/> <p className='usenm'>+9057896 67</p>
           </div>
           <MyLocation className='dob'/>
            <p className='userdob'>NewYork | USA</p>      
            
            <MailOutline className='dob'/>
            <p className='userdob'>Kally@gmail.com </p>      
            </div>
           
          </div>
      <Editpanel/>
          </div>

    </>
  )
}

export default Edituser