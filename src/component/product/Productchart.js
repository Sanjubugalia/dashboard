import React from 'react'
import "../product/product.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


function Productchart({data,grid,dataKey,title}) {
    return (
        <>
        
            <div className="chart">
                <h6 className="charttitle"><b> {title} </b></h6>
                <ResponsiveContainer aspect={4 / 1}>
                    <LineChart data={data} width="100%">
                        <XAxis dataKey="name" stroke='#5550bd'/>
                        <Line type="natural" dataKey={dataKey} stroke='#5550bd'/>
                 <Tooltip/>
                   { <CartesianGrid stroke='#ffeffe' strokeDasharray="5 5"/>}
                    </LineChart>    
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default Productchart