import React from 'react'
import Productchart from './Productchart';
import { productdata } from '../../chartdata';
import Productitem from './Productitem';
import "../product/product.css"
import Productupdate from './Productupdate';

function Product() {
  return (
  <>
  <div className='container productcontainer'>
    
    <div className='col-md-6'>
   <Productchart data={productdata} title="Sales Performance" grid dataKey="sale"/>
   </div>
   <div className='col-md-6'>
   <Productitem/>
   </div>
   <Productupdate/>
  </div>
   

  </>
  )
}

export default Product