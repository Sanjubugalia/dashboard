import React,{useState,useEffect} from 'react';
import axios from 'axios';



function Widgetssm() {
const [get, setGetdata] = useState([""])

  const btnclick= async()=>{
    const res= await axios.get("http://localhost:3002/posts");
    setGetdata(res.data)   
    console.log(res)
}

useEffect(()=>{
       btnclick()
},[])

  return (
    <>
<div className="container "></div>
      <div className="widgetsm  scroll-div">
        <h4 className="widgettitle"> New Join Members </h4>
        <hr/>
        {get.map((cval) => {
          return (
            <>
              <div className='container'>
              <div className=''>
                <div className='widgetmember'>
                    <img src={cval.img}  alt='jjjkj' className='widgetsmimg' />
                    {/* <span>{cval.id}</span> */}
                    <span className="memername">{cval.username}</span><br />
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