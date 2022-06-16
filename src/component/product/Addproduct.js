import React, { useState, useEffect } from 'react'
import "../user/user.css"
import axios from 'axios'


function Addproduct() {
        const [inpdata, setInpdata] = useState([{ productname: "", brand: "", mfgd: "", color: "", price: "",status:"",stock:"" }])
        const {productname, brand, mfgd, color, price,status,stock} = inpdata


        const inputHandler = (e) => {
                setInpdata({ ...inpdata, [e.target.name]: e.target.value })
                console.log({ [e.target.name]: e.target.value })
        }

        const btnclick = async () => {
                const res = await axios.post("http://localhost:3002/product");
                console.log(res)
        }

        useEffect(() => {
                btnclick()
        }, [])

        return (
                <>
                        <div className='container'>
                                <div className="newusersm">
                                        <h4 className="widgettitle"> Add New Product </h4>
                                        
                                        <div className="container">
                                                <label>Product Name</label><br />
                                                <input type="text" className="inpnewuser" name="productname" value={productname} onChange={(e) => { inputHandler(e) }} placeholder="Product Name" /><br />
                                                <label>Brand</label><br />
                                                <input type="text" className="inpnewuser ml-5" name="brand" value={brand} onChange={(e) => { inputHandler(e) }} placeholder="Brand" /><br />
                                                <label>Mfg Date:</label><br />
                                                <input type="text" className="inpnewuser" name="mfgd" value={mfgd} onChange={(e) => { inputHandler(e) }} placeholder="MFG Date" /><br />
                                                <label>Color:</label><br />
                                                <input type="text" className="inpnewuser" name="color" value={color} onChange={(e) => { inputHandler(e) }} placeholder="color" /><br />
                                                <label>Price:</label><br />
                                                <input type="text" className="inpnewuser" name="price" value={price} onChange={(e) => { inputHandler(e) }} placeholder="Price" /><br />
                                                <label>Status:</label><br />
                                                <input type="text" className="inpnewuser" name="status" value={status} onChange={(e) => { inputHandler(e) }} placeholder="status" /><br />
                                                <label>Stock:</label><br />
                                                <input type="text" className="inpnewuser" name="stock" value={stock} onChange={(e) => { inputHandler(e) }} placeholder="Stock" /><br />

                                        </div>
                                </div>

                                <div className="newuserlg float-right">
                                        <h4 className="widgettitle"></h4>
                                        <div className='widgetmember hrclass'>
                                         <button className="btn btn-primary" type="button" onClick={() => btnclick()}>Button</button>
                                        </div>
                                </div>
                        </div>


                </>
        )
}

export default Addproduct