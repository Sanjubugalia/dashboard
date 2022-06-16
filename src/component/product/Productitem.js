import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Productitem() {
    const [get, setGetdata] = useState([])

  const btnclick= async()=>{
    const res= await axios.get("http://localhost:3002/productdata");
    setGetdata(res.data)   
    console.log(res)
}

useEffect(()=>{
       btnclick()
},[])


  return (
    <>
     <div className="productdisplay float-right">
        
    {get.map((elem)=>{
    const { id,img, productname, brand,sale, mfgd,color,price,stock,status } = elem;
    if(id==1){
      return(
        <>        
        <div className='widgetmember'>
            <div className='divproduct'>          
                <p className='paragraph'><img className='productdisplyimg' src={img}></img><h6 className='fr proname'> {productname}</h6></p>
                <h6></h6>
                <p className='paragraph'><b>Id: </b> <span className='spandisplay'> {id}  </span> </p>             
                <p className='paragraph'><b>Brand:  </b><span className='spandisplay'> {brand}</span> </p>
                <p className='paragraph'><b>In stock </b><span className='spandisplay'> {stock} </span>  </p>         
                <p className='paragraph'><b>Status </b><span className='spandisplay'>{status}  </span>  </p>
                <p className='paragraph'><b>Sale </b><span className='spandisplay'>{sale}  </span>  </p>
               
             </div>          
        </div>
        </>
      )
    }else{
      <div></div>
    }
    })
  }
   
</div>
         </>
         
  )
    
  }
export default Productitem