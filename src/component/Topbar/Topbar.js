import React from 'react';
import "./topbar.css"
import { Language, NotificationsNone, Settings } from '@material-ui/icons';


function Topbar() {
  return (
  <>
      <div className="topbar">
      <div className="topbarwrapper">
          <div className="topleft">
<span className="logo">
    SanRajadmin
</span>
          </div>
          <div className="topright">
              <div className='topiconcontainer'>
              <NotificationsNone/>
              <span className='topiconbadge'>2 </span>
                  </div> 
                  <div className='topiconcontainer'>
              <Language/>
              <span className='topiconbadge'>2 </span>
                  </div> 
                  <div className='topiconcontainer'>
              <Settings/>
                  </div> 
                  <img src="https://images.pexels.com/photos/7173025/pexels-photo-7173025.jpeg?cs=srgb&dl=pexels-nataliya-vaitkevich-7173025.jpg&fm=jpg" alt="" className="avtar" />

          </div>
      </div>
  </div>
  
  </>
  )
}

export default Topbar