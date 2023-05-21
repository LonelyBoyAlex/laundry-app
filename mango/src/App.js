
import { BrowserRouter, Redirect, Route, Router, Routes, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import React, { Suspense, useEffect, useState } from 'react'
import Home from './Home';


import { ServicesSection } from './servicesSection';
import { Aboutpage } from './Aboutpage';
import Register from './components/register/Register';
import Faq from './Faq';
import Login from './components/login/Login';

import PuffLoader from 'react-spinners/PuffLoader';
import Dashboard from './components/Dashboard'
import ProtectedRoutes from './ProtectedRoutes';

import Order from './components/Order';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';



function App() {
 const [loading,setLoading]= useState(false);
 useEffect(() => {
   setLoading(true)
 
   setTimeout(() => {
    setLoading(false)
   },2100)
 }, [])

 const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);



 
  return (
    <div className="App">


    {

      loading ?
    <div className='loader'>

     <PuffLoader loading={loading} color={"#33a3c5"}  size={150} className="text-center container"/>
    <div className='text-center fs-2 container'>"In order to be better it's important to know what's better"</div>
      </div>
     :
    
      <BrowserRouter>
      
     
        <Switch>
          <Route exact path="/"> 
          <Navbar/>
  
        
         <Home/>
         <Footer/>

         
   </Route>
 


       
      
        <Route exact path="/services" >
        <Navbar/>
      <ServicesSection/>
      
        </Route>
        <Route path="/about" >
        <Navbar/>
          <Aboutpage/>
          </Route>
          <Route exact path="/register" >
          <Navbar/>
       <Register/>
       
          </Route>
          <Route exact path="/faq">
          <Navbar/>
      <Faq/>
          </Route>

          <Route exact path="/login" >
          <Navbar/>
       <Login/>
        
</Route>
          <ProtectedRoutes  path="/redirect/dashboard"  auth={auth} >
          <Dashboard/>
          </ProtectedRoutes>

          <Route path="/dashboard/orders" >
         <Sidebar/>
           <Order/>
           
          </Route>
          <Route path="/dashboard/profile" >
         <Sidebar/>
           <Profile/>
           </Route>
      
      
   <Route  exact path="*" component={ErrorPage}/>
        
        </Switch>

      
      </BrowserRouter>

    }
      </div>

    

  );
}

export default App;
