import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Sidebar from "./component/Sidebar/Sidebar"
import Topbar from "./component/Topbar/Topbar";
import Userlist from "./component/user/Userlist"
import Home from "./component/Home/Home"
import Edituser from './component/user/Edituser';
import Product from './component/product/Product';
import Newuser from './component/user/Newuser';
import Productlist from './component/product/Productlist';
import Addproduct from './component/product/Addproduct';
import Editpanel from './component/user/Editpanel';
import Productitem from './component/product/Productitem';
import Productupdate from './component/product/Productupdate';

function App() {
  return (
    <>  
  <Router>
  <Topbar/>
  <div className='container-fluid'>
  <Sidebar/>
 <Routes>
 <Route exact path ="/" element={<Home/>}></Route>
 <Route exact path ="/userlist" element={<Userlist/>}></Route>
 <Route exact path ="/edituser/:id" element={<Edituser/>}></Route>
 <Route exact path ="/editpanel/:id" element={<Editpanel/>}></Route>
 <Route exact path ="/newuser" element={<Newuser/>}></Route>
 <Route exact path ="/product" element={<Product/>}></Route>
 <Route exact path ="/productlist" element={<Productlist/>}></Route>
 <Route exact path ="/productitem" element={<Productitem/>}></Route>
 <Route exact path ="/addproduct" element={<Addproduct/>}></Route>
 <Route exact path ="/productupdate" element={<Productupdate/>}></Route>
</Routes>
</div>
</Router>
</>


    
  )
}

export default App