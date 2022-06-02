import React from 'react'
import "./widgets.css"


function Widgetslg() {

  const Button = ({ type }) => {
    return <button className={"widgetlgbtn" + type}>{type}</button>
  }
  return (
    <>
      <div className="widgetlg float-right">
        <h4 className="widgettitle"> Latest Transactions</h4>

        <div className='widgetmember'>
          <table>
            <tr>
              <th className="thcustomer">Customer</th>
              <th className="thstyle">Date</th>
              <th className="thstyle">Amount</th>
              <th className="thstyle">Status</th>
            </tr>
            <tr>
              <td><img alt="kjhk" src="https://www.byrdie.com/thmb/nZafQrs8Y0GgP9PhHQkR7laWj1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdn.cliqueinc.com__cache__posts__194213__model-skincare-secrets-194213-1497385825039-main.700x0c-79b04602385344de88dd0a18db51f864-010369ad53b445c88ab1329e01a14d14.jpg" className='widgetsmimg' />Kally</td>
              <td>22may</td>
              <td> $122.00 </td>
              <td><Button type="Approved" /></td>
            </tr>
            <tr>
              <td><img alt='hg' src="https://www.byrdie.com/thmb/nZafQrs8Y0GgP9PhHQkR7laWj1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdn.cliqueinc.com__cache__posts__194213__model-skincare-secrets-194213-1497385825039-main.700x0c-79b04602385344de88dd0a18db51f864-010369ad53b445c88ab1329e01a14d14.jpg" className='widgetsmimg' />Kally</td>
              <td>22may</td>
              <td> $122.00 </td>
              <td><Button type="Decline" /></td>
            </tr>
            <tr>
              <td><img alt='klk' src="https://www.byrdie.com/thmb/nZafQrs8Y0GgP9PhHQkR7laWj1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdn.cliqueinc.com__cache__posts__194213__model-skincare-secrets-194213-1497385825039-main.700x0c-79b04602385344de88dd0a18db51f864-010369ad53b445c88ab1329e01a14d14.jpg" className='widgetsmimg' />Kally</td>
              <td>22may</td>
              <td> $122.00 </td>
              <td><Button type="Pending" /></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default Widgetslg