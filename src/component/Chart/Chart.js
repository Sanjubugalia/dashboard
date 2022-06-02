import React from 'react'
import "./Chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


function Chart({data,grid,dataKey,title}) {
    return (
        <>
            <div className="chart">
                <h4 className="charttitle"> {title} </h4>
                <ResponsiveContainer aspect={4 / 1}>
                    <LineChart data={data} width="100%">
                        <XAxis dataKey="name" stroke='#5550bd'/>
                        <Line type="monotone" dataKey={dataKey} stroke='#5550bd'/>
                 <Tooltip/>
                   { <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}
                    </LineChart>    
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default Chart