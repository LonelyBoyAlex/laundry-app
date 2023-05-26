import React from 'react'
import "./Footer.css"
import img1 from "../../Assets/wave3.svg"
import logo from "../../Assets/Laundry Cafe-1.png"
import heart from "../../Assets/heart.gif"
function Footer() {
  return (
     <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row marg">
                    <div class="col-sm-6 col-md-3 item">
                        <h3 className='head'>Services</h3>
                        <ul>
                            <li><a href="#">Business E-commerce</a></li>
                            <li><a href="#">Transaction</a></li>
                            <li><a href="#">Customer Support</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3 className='head'>About</h3>
                        <ul>
                            <li><a href="https://www.google.com">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Location</a></li>
                        </ul>
                    </div>

                    <div class="col-sm-6 col-md-3 item">
                        <h3 className='head'>Business</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Location</a></li>
                        </ul>
                    </div>

                    <div class="col-sm-6 col-md-3 item">
                        <h3 className='head'>Site-Map</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Location</a></li>
                        </ul>
                    </div>
                    

                    

                    
                    <div class="col-sm-6 col-md-3 item company logo">
                        <img src={logo} height={100} width={100}/>
                      
                        <p >Made with love <img src={heart}height={40} width={40} /></p>
                        
                    </div>

                    <div className='container text-center line1'>
                    <div class="col item social"><a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a><a href="https://www.twiiter.com/"><i class="fa fa-twitter"></i></a><a href="https://www.instagram.com"><i class="fa fa-instagram"></i></a><a href="https://www.linkedin.com"><i class="fa fa-linkedin"></i></a><a href="https://www.whatsapp.com"><i class="fa fa-whatsapp"></i></a></div>
                </div>
                    </div>
                    </div>

                    <div className='container line'> </div>
                <p class="copyright">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2022-2023 © Laundry Cafe™ Ltd. All rights reserved.</p>
            
        </footer>
        <img src={img1}/>
    </div>
   
  )
}

export default Footer
