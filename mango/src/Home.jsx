import React from 'react'

import "./Home.css"

import BackgroundImg from "./Assets/hero.webp"



import { Element }    from 'react-scroll'
import { Marginer }   from './components/marginer'
import styled         from "styled-components";
import BackgroundImg1 from "./Assets/hero1.webp"

import Banner from './components/banner/Banner'


import ironing           from "./Assets/ironing.png"
import curtains          from "./Assets/cleaner.png"
import shoe              from "./Assets/home.png"
import laundry           from "./Assets/laundry.png"
import { Link, NavLink } from 'react-router-dom'

import AutoTyping    , { BlinkCursor } from 'react-auto-typing'
import Customers  from './components/customer/Customers'






const TopContainer =styled.div`
width              : 100%;
height             : 75vh;
padding            : 0;
background-image   : url(${BackgroundImg});
background-position: center;
position           : relative;
background-repeat  : no-repeat;
background-size    : cover;
font-family        : 'Quicksand', sans-serif;
@media screen and (max-width: 600px) {
  background-image : url(${BackgroundImg1});
  background-repeat: no-repeat;

}
       
`;
const BackgroundFilter = styled.div`
  width           : 100%;
  height          : 100%;
  background-color: rgba(62, 63, 63, 0.8);
  display         : flex;
  flex-direction  : column;
  align-items     : center;

`;
const MotivationalText = styled.h1`
  font-size  : 30px;
  font-weight: 100;
  line-height: 1;
  color      : rgb(231, 231, 231);
  margin     : 0;
  text-align : center;
 

`;

function Home() {


  return (
 
<div >
   
 
<Element name = "topSection">
      <TopContainer>
        <BackgroundFilter>
        
          <Marginer direction = "vertical" margin                             = "10em" />
          <h1       class     = "display-1">Laundry Cafe<sub><small className = 'fo'>Tm</small></sub></h1>
         
          <Marginer direction = "vertical" margin = "4em" />
          <MotivationalText>
          <p className = 'fs-1 lead container text-center'> <>
    <AutoTyping
      active // <boolean>
      textRef       = 'Making Your Life Better'  // <string>
      writeSpeed    = {150}                      // <number>
      deleteSpeed   = {150}                      // <number>
      delayToWrite  = {1000}                     // <number>
      delayToDelete = {2000}                     // <number>
    />
    <BlinkCursor
      active // <boolean>
      blinkSpeed = {1500}  // <number>
    />
</></p>  
  </MotivationalText>
          <Marginer direction = "vertical" margin = "25em" />
       
         </BackgroundFilter>
       
          </TopContainer>
      
    </Element>


   <div      className = 'text-center'><h2 className = 'fs-2'>We Provide</h2></div>
   <Marginer direction = "vertical" margin           = "5em" />
   <div      class     = "container text-center">
   <div      class     = "row">
   <div      class     = "col-sm">
  
  <Link to    = "/register" style = {{ color: 'inherit', textDecoration: 'inherit'}}>
  <div  class = "card ">
  <img  src   = {shoe} class      = "card-img-top img-fluid " alt = "..."/>
  <div  class = "card-body">
  <h5   class = "card-title"><b>Dry Cleaning</b></h5>
  <p    class = "card-text">Eco-Friendly | Expert Stain Removal</p>
      </div>
      </div>
  </Link>

</div>



<div  class = "col-sm">
<Link to    = "/register" style = {{ color: 'inherit', textDecoration: 'inherit'}}>
<div  class = "card ">
<img  src   = {laundry}class    = "card-img-top img-fluid" alt = "..."/>
<div  class = "card-body">
<h5   class = "card-title"><b>Premium Laundry</b></h5>
<p    class = "card-text">Eco-Friendly | Expert Stain Removal</p>
      </div>
      </div>
</Link>
</div>


<div class = "col-sm ">

<Link to    = "/register" style = {{ color: 'inherit', textDecoration: 'inherit'}}>
<div  class = "card ">
<img  src   = {curtains} class  = "card-img-top" alt = "..."/>
<div  class = "card-body">
<h5   class = "card-title">Curtains Cleaning</h5>
<p    class = "card-text">Vibrant and brand new</p>
      </div>
      </div>
      </Link>
</div>

<div class = "col-sm">

<Link to    = "/register" style = {{ color: 'inherit', textDecoration: 'inherit'}}>
<div  class = "card ">
<img  src   = {ironing} class   = "card-img-top img-fluid" alt = "..."/>
<div  class = "card-body">
<h5   class = "card-title"><b>Steam Ironing</b></h5>
<p    class = "card-text">Sanitized and Smooth</p>
      </div>
      </div>
      </Link>
</div>
</div>
</div>


<Marginer direction = "vertical" margin = "2em" />
<Banner/>


<Customers/>





</div>




  )
}

export default Home