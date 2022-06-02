import React from 'react';
import "./widgets.css";
import { userdata } from "../../chartdata"

function Widgetssm() {
  return (
    <>
<div className="container "></div>
      <div className="widgetsm  scroll-div">
        <h4 className="widgettitle"> New Join Members </h4>
        <hr />

        {userdata.map((cval) => {
          return (
            <>
              <div className='container'>
              <div className=''>
                <div className='widgetmember '>
                
                    <img alt='jjjkj' src={cval.img} className='widgetsmimg' />
                    <span className="memername">{cval.name}</span><br />
                  </div>
                  <div className="memberdiv">
                    <span className="memberposition">{cval.position} </span>
                    <div className='postiondisplay'>
                      <span className='positionspan'>Display</span>
                    </div>
                  </div>   </div>
              </div>
            </>
          )
        })}

      </div>




    </>
  )
}

export default Widgetssm