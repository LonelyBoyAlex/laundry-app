import React, { useEffect, useState } from 'react'
import "./Register.css"

import ScaleLoader from 'react-spinners/ScaleLoader';
import {Link, useHistory } from 'react-router-dom'

import Footer from '../footer/Footer';
import Logo from "../../Assets/Laundry Cafe-2.png"

function Register() {

 

  
  const history = useHistory()
  // Handle Inputs
  const handleInput = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setUser({...user, [name]:value});
  }
  
  
  
    const [user, setUser] = useState({
      username : "",
      email : "",
      password : ""
    });
  
    // Handle Inputs
   
  
    // Handle Submit
    const handleSubmit = async (event)=>{
      event.preventDefault();
      // Object DeStructuring
      // Store Object Data into Variables
      const {username, email, password} = user;
      try {
        //It is Submitted on port 3000 by default
        // Which is Front End but we need to 
        // Submit it on Backend which is on 
        // Port 3001. So we need Proxy.
        const res = await fetch('/register', {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            username, email, password
          })
        })
        console.log(res.status)
        if(res.status === 400 || !res){
          window.alert("Already Used Details")
        }else{
          // You need to Restart the Server for Proxy Works
          // Now Try Again
          window.alert("You have been Registered")
          history.push("/redirect/dashboard")
        
        }
      } catch (error) {
        console.log(error);
      }
    }
    
    const [loading,setLoading]= useState(false);
    useEffect(() => {
      setLoading(true)
    
      setTimeout(() => {
       setLoading(false)
      },2300)
    }, [])
  return (
    <>
    {
 loading ?
 <div className='loader'>

 <ScaleLoader color={"#33a3c5"} size={100} loading={loading}/>
 </div>
:

<div>
  
  <form onSubmit={handleSubmit} method="POST">
  <div className="container1 img-fluid">
              <div className="card1">
                  <div className="top_div">
                      
                  </div>
                  <div className="text text-center">
                      
                  <img src={Logo} width={50} height={60} />
                  <h5>Sign Up</h5>
                  </div>
                  <div className="input_text">
                      <input type="email" value={user.email}  name="email" onChange={handleInput} required/>
                      <label>Email</label>
                      
                  </div>
                  <div className="input_text">
                      <input type="text" value={user.username} onChange={handleInput} name="username" required/>
                      <label>Full name</label> 
                     
                  </div>
                  <div className="input_text">
                      <input type="password"  value={user.password} onChange={handleInput} name="password" required/>
                      <label>Password</label>
                     
                  </div>
                  <div className="button">
                  <button type="submit">Register</button>
                  <h6 className='text-center'>By signing up you are agreeing to our <br>
                  </br><p className='text-center'>Terms and Condition <br/> <p className='text-center'>Have an account?<Link to ="/login">Log in
                
                  </Link></p></p>
                  
                  </h6>
                  
                  </div>
              </div>
          
              
          </div>
  </form>

          




<Footer/>
</div>
    }
   
    </>
   
 

  )
}

export default Register