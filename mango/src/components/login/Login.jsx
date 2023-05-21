import React, { useEffect, useState } from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom';
import Footer from '../footer/Footer';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Logo from "../../Assets/Laundry Cafe-2.png"

function Login() {

  

  const history = useHistory()

  const [user, setUser] = useState({
    email : '',
    password : ''
  });

  // Handle Input
  const handleChange = (event) =>{
    let name = event.target.name
    let value = event.target.value

    setUser({...user, [name]:value})
  }

  // Handle Login
  const handleSubmit = async (event) =>{
    event.preventDefault();
    const {email, password} = user;
    try {
      const res = await fetch('/login', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          email, password
        })
      });

      if(res.status === 400 || !res){
        window.alert("Invalid Credentials")
      }else{
        
        window.alert("Login Successfull");
        history.push('/redirect/dashboard');
        // Token is generated When we Logged In.
        // Now we need to create Schema for Messages
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
  <form onSubmit={handleSubmit} >
  <div className="container1 img-fluid">
              <div className="card1">
                  <div className="top_div">
                      
                  </div>
                  <div className="text text-center">
                      
                  <img src={Logo} width={50} height={60} />
                  <h5>Member Login</h5>
                  </div>
                  <div className="input_text">
                      <input type="email" value={user.email}  name="email" onChange={handleChange} required/>
                      <label>Email</label>
                      
                  </div>
                
                  <div className="input_text">
                      <input type="password"  value={user.password} onChange={handleChange} name="password" required/>
                      <label>Password</label>
                     
                  </div>
                  <div className="button">
                  <button type="submit">Login</button>
                  <h6 className='text-center'>
<p className='text-center'><p className='text-center underline'>New user?<Link to ="/register">Sign up
              
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

export default Login