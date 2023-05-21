import React from 'react'
import { Marginer } from './Components/marginer'
import styled from "styled-components";
import { SectionTitle } from './Components/sectionTitle'
import "./Explore.css"
import place1 from "./Assets/place1.jpg"
import place2 from "./Assets/place2.jpg"
import place3 from "./Assets/place3.jpg"

import { Element } from "react-scroll";



const ServicesContainer = styled(Element)`
width: 100%;
min-height: 1100px;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0;

`;

function Explore() {

  return (
    <div > 
     <div className='container-fluid'>
    <div className='explore_header'>
             <ServicesContainer name="servicesSection">
             <Marginer direction="vertical" margin="3em" />
             <SectionTitle><div className='text-center'>Popular Places</div></SectionTitle>
            <Marginer direction="vertical" margin="6em" />
      
            <div className='container'>
            <Marginer direction="vertical" margin="18em" />
    <div class="row row-cols-2 row-cols-md-3 g-4">
      <div class="col">
        <div class="card img-fluid">
          <img src={place1} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Speedy Wash India Pvt Ltd </h5>
            <p class="card-text">12 Places in Uttar-pradesh</p>
          
          </div>
        </div>

      </div>
      
      <div class="col">
        <div class="card">
          <img src={place2} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Waasle Laundry</h5>
            <p class="card-text">16 places in Uttar Pradesh</p>
          </div>
          
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={place3} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Washing Xpress</h5>
            <p class="card-text">13 places in Uttar Pradesh</p>
          </div>
        </div>
        
      </div>
    
    </div>
    
       
    </div>
   
     </ServicesContainer>
     
    
        </div>
        </div>
        
        <Marginer direction="vertical" margin="5em" />
        </div>
   
    
  )
}

export default Explore