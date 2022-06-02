import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Sidebar from "./component/Sidebar/Sidebar"
import Topbar from "./component/Topbar/Topbar";
import Userlist from "./component/user/Userlist"
import Home from "./component/Home/Home"
import Edituser from './component/user/Edituser';
import Newuser from './component/user/Newuser';

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
 <Route exact path ="/edituser" element={<Edituser/>}></Route>
 <Route exact path ="/newuser" element={<Newuser/>}></Route>
</Routes>
</div>
</Router>
</>


    
  )
}

export default App