import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link,useNavigate,useParams} from "react-router-dom"
import "../product/product.css";

function Productlist() {
    const [get, setGetdata] = useState([""])
    const navigate=useNavigate();
    const paramsid=useParams()
    
      const btnclick= async()=>{
        const res= await axios.get("http://localhost:3002/productdata");
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
                <div>
                    <Link to="/addproduct"><button className='newuserbtn fr'>Add Product </button></Link>
                    <table className="table table-border-dark">
                        <thead>
                            <tr className=' theadcolor'>
                                <th scope="col ">Id</th>
                                <th scope="col">Image</th>
                                <th scope="col"> Product Name</th>
                                <th>Brand</th>
                                <th>Mfg Date</th>
                                <th scope="col">Color</th>
                                <th scope="col">Price</th>     
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                                                       </tr>
                        </thead>
                        <tbody>
                            {get.map((elem) => {
                                const { id,img, productname, brand, mfgd,color,price } = elem;

                                return (
                                    <>
                                        <tr className='trowcolor'>
                                            <th scope="row">{id}</th>
                                            <td><img className='productlistimg' src={img}></img></td>
                                            <td>{productname}</td>
                                            <td>{brand}</td>
                                            <td>{mfgd}</td>
                                            <td>{color}</td>
                                            <td>{price}</td>
                                            <td><button className='btn btn-outline-primary'><Link to={`/productupdate/${id}`}>Edit</Link></button></td>
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

export default Productlist