import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from "@material-ui/icons"

function Userlist() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 110 },
        {
          field: 'username',
          headerName: 'User Name',
          width: 170,
       
        },
     
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 130,
        
        },
      
        {
          field: 'email',
          headerName: 'Email',
          type: 'string',
          width: 150,
       
        },
        {
          field: 'status',
          headerName: 'Status',
          type: 'string',
          width: 140,
       
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          type: 'string',
          width: 140,
       
        },
        {
          field: 'avtar',
          headerName: 'image',
          width: 150,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell:(params)=>{
            return(
            <>
            <button className='usereditbtn' to="/edituser"> Edit</button>
            <DeleteOutline className='userdeletebtn'/>
            </>
            )
          }
        },
      ];
      
      const rows = [
        { id: 1,username: 'Jon Snow', age: 35, email:"jon@gmail.com",
        avtar:"https://www.byrdie.com/thmb/nZafQrs8Y0GgP9PhHQkR7laWj1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdn.cliqueinc.com__cache__posts__194213__model-skincare-secrets-194213-1497385825039-main.700x0c-79b04602385344de88dd0a18db51f864-010369ad53b445c88ab1329e01a14d14.jpg",status:"active",transaction:"$122.00"  },
        { id: 2, username: 'CerseiLannister', age: 42,email:"jon@gmail.com",
        avtar:"https://www.byrdie.com/thmb/nZafQrs8Y0GgP9PhHQkR7laWj1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdn.cliqueinc.com__cache__posts__194213__model-skincare-secrets-194213-1497385825039-main.700x0c-79b04602385344de88dd0a18db51f864-010369ad53b445c88ab1329e01a14d14.jpg",status:"active",transaction:"$122.00"  },
        { id: 3, username: 'Jaime Lannister', age: 45,email:"jon@gmail.com",
        avtar:"https://www.byrdie.com/thmb/nZafQrs8Y0GgP9PhHQkR7laWj1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdn.cliqueinc.com__cache__posts__194213__model-skincare-secrets-194213-1497385825039-main.700x0c-79b04602385344de88dd0a18db51f864-010369ad53b445c88ab1329e01a14d14.jpg",status:"active",transaction:"$122.00"  },
        { id: 4, username: 'Arya Stark', age: 16,email:"jon@gmail.com",
        avtar:"https://www.byrdie.com/thmb/nZafQrs8Y0GgP9PhHQkR7laWj1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdn.cliqueinc.com__cache__posts__194213__model-skincare-secrets-194213-1497385825039-main.700x0c-79b04602385344de88dd0a18db51f864-010369ad53b445c88ab1329e01a14d14.jpg",status:"active",transaction:"$122.00"  },
        { id: 5, username: 'Daenerys Targaryen', age: null,email:"jon@gmail.com",
        avtar:"https://www.byrdie.com/thmb/nZafQrs8Y0GgP9PhHQkR7laWj1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdn.cliqueinc.com__cache__posts__194213__model-skincare-secrets-194213-1497385825039-main.700x0c-79b04602385344de88dd0a18db51f864-010369ad53b445c88ab1329e01a14d14.jpg",status:"active",transaction:"$122.00"  },
        { id: 6, username: "Melisandre", age: 150,email:"jon@gmail.com",
        avtar:"https://www.byrdie.com/thmb/nZafQrs8Y0GgP9PhHQkR7laWj1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdn.cliqueinc.com__cache__posts__194213__model-skincare-secrets-194213-1497385825039-main.700x0c-79b04602385344de88dd0a18db51f864-010369ad53b445c88ab1329e01a14d14.jpg",status:"active",transaction:"$122.00"  },
        { id: 7, username: 'Ferrara Clifford', age: 44,email:"jon@gmail.com",
        avtar:"https://www.byrdie.com/thmb/nZafQrs8Y0GgP9PhHQkR7laWj1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdn.cliqueinc.com__cache__posts__194213__model-skincare-secrets-194213-1497385825039-main.700x0c-79b04602385344de88dd0a18db51f864-010369ad53b445c88ab1329e01a14d14.jpg",status:"active",transaction:"$122.00"  },
        { id: 8, username: 'Rossini Frances', age: 36,email:"jon@gmail.com",
        avtar:"https://www.byrdie.com/thmb/nZafQrs8Y0GgP9PhHQkR7laWj1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdn.cliqueinc.com__cache__posts__194213__model-skincare-secrets-194213-1497385825039-main.700x0c-79b04602385344de88dd0a18db51f864-010369ad53b445c88ab1329e01a14d14.jpg",status:"active",transaction:"$122.00"  },
        { id: 9, username: 'Harvey Roxie', age: 65,email:"jon@gmail.com",
        avtar:"https://www.byrdie.com/thmb/nZafQrs8Y0GgP9PhHQkR7laWj1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdn.cliqueinc.com__cache__posts__194213__model-skincare-secrets-194213-1497385825039-main.700x0c-79b04602385344de88dd0a18db51f864-010369ad53b445c88ab1329e01a14d14.jpg",status:"active",transaction:"$122.00"  },
        

      ];
      
  return (
      <>
    <div className='container py-5'>
         <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection disableSelectionOnClick />
    </div>
    </div>
    </>
  )
}

export default Userlist