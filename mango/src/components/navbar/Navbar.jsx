import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import image from "../../Assets/Laundry Cafe-1.png"

function Navbar() {
  return (
   
  <nav class="navbar sticky-top  navbar-expand-lg navbar-dark bg-dark" >
  <div class="container-fluid">
    <Link to="/" class="navbar-brand"><img src={image} className="navbar-brand container-fluid" width={70} height={65}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 container">
    
        
      </ul>
        <div class="d-grid gap-5 d-md-flex justify-content-lg-end">
      
           <ul class="navbar-nav me-auto mb-2 mb-lg-0 container">
         
      <li class="nav-item">
        
            <Link to="/" class="nav-link active" aria-current="page" ><i class="fa fa-home"></i>Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/services"  class="nav-link active" aria-current="page" ><i class="fa fa-gear"></i>Services</Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link active" aria-current="page" ><i class="fa fa-info-circle" aria-hidden="true"></i>About </Link>
          </li>
          <li class="nav-item">
            <Link  to="./faq" class="nav-link active" aria-current="page" ><i class="fa fa-question-circle" aria-hidden="true"></i>FAQs</Link>
          </li>
      </ul>
        <Link to="/register"><button class="btn  btn-primary" type="submit">Register</button></Link>

        </div>
      
   
    </div>
  </div>
</nav>
    
  )
}

export default Navbar