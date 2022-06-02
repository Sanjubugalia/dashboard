import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react';
import "./Featured.css"

function Featured() {
  return (
   <>
   <div className="featured">
     <div className="featureditem">
       <span className="featuretitle">
         Revenue
       </span>
       <div className="moneycontainer">
         <span className="money">$2,457</span>
       <span className="moneyrate">-1.3 <ArrowDownward className='arrowicon negative'/></span>
       </div>
       <span className="featuredsub">Compare to last month</span>
     </div>


     <div className="featureditem">
       <span className="featuretitle">
         Sales
       </span>
       <div className="moneycontainer">
         <span className="money">$4,415</span>
       <span className="moneyrate">-11.4 <ArrowDownward className='arrowicon negative'/></span>
       </div>
       <span className="featuredsub">Compare to last month</span>
     </div>

     <div className="featureditem">
       <span className="featuretitle">
         Cost
       </span>
       <div className="moneycontainer">
         <span className="money">$2,457</span>
       <span className="moneyrate">+2.4 <ArrowUpward className='arrowicon '/></span>
       </div>
       <span className="featuredsub">Compare to last month</span>
     </div>

   </div>
   </>
  )
}

export default Featured