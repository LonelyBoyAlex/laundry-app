import React, { useEffect, useState } from 'react'
import profile1 from "../../Assets/user1.png"

import "./Sidebar.css"


import logout from "../../Assets/power-off (1).png"
import {  Link } from 'react-router-dom';

function Sidebar() {

 
  return (
   
   


<div>

<nav class="menu" tabindex="0">
 <div class="smartphone-menu-trigger"></div>
 <header class="avatar">
   <img src={profile1}/>
   <h2 style={{color:"grey"}} >User</h2>
 </header>
 <ul>
   <li tabindex="0" class="icon-dashboard"><span><Link to="/redirect/dashboard" style={{textDecoration:"none" ,color:"white"}}  >Home</Link>
</span></li>
   <li tabindex="0" class="icon-customers"><Link to="/dashboard/orders"  style={{textDecoration:"none" ,color:"white"}} >orders</Link></li>
   <li tabindex="0" class="icon-users"><span><Link to="/dashboard/profile"  style={{textDecoration:"none" ,color:"white"}}  >Profile</Link></span></li>
   <li tabindex="0" class="icon-settings"><span> <Link to="/dashboard/wallet"  style={{textDecoration:"none" ,color:"white"}} >My wallet</Link></span></li>
   <li tabindex="0" className='p-3'><span><img src={logout} alt=""  width={30} height={30} className="text-center img-fluid offcanvas-title" style={{cursor:"pointer",color:"white"}}/><Link to="/" style={{textDecoration:"none",color:"white"}}>Logout</Link>
    </span></li>
   
 </ul>
</nav>






</div>
  
   
  )
}

export default Sidebar