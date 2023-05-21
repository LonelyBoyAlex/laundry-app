import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

import { Marginer } from "./components/marginer";
import { OurSerivce } from "./components/ourService";
import { SectionTitle } from "./components/sectionTitle";
import speed from "./Assets/speed.svg"
import medal from "./Assets/medal.svg"
import search from "./Assets/search.svg"
import stars from "./Assets/stars.svg"
import aim from "./Assets/aim.svg"
import "./Aboutpage.css"
import about from "./Assets/hero3.jpg"
import about2 from "./Assets/about.jpg"
import apurv from "./Assets/apurv.jpg"
import jinan from "./Assets/jinan.jpg"
import apekshit from "./Assets/apekshit.jpg"
import Footer from "./components/footer/Footer";
import ScaleLoader from 'react-spinners/ScaleLoader';
const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

 
`;




export function Aboutpage(props) {
  const [loading,setLoading]= useState(false);
  useEffect(() => {
    setLoading(true)
  
    setTimeout(() => {
     setLoading(false)
    },2100)
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
<div className="about_header">
       <div className="about_background container">
        <img src={about} className="text-center img-fluid container img-fluid"/>
       </div>
       <ServicesContainer name="servicesSection">
       <Marginer direction="vertical" margin="1em" />
     <SectionTitle>  LAUNDRY BELONGS IN A Laundry Cafe</SectionTitle>

<h6 className="text-center  p">An average human spends between 12000 hours of their adult life in cleaning and managing their clothes. We have all grown up<br></br>
on a heavy dose of detergent commercials propagating the idea of ‘whiter the better’.</h6>

<Marginer direction="vertical" margin="4em" />
<div class="container text-center">
 <div class="row ">
   <div class="col-sm-6 p"> 
   <img src={about2} class="  img-fluid rounded" alt="..."/>

   <Marginer direction="vertical" margin="3em" />
  
 </div>
   <div class="col-sm-6"><h6 className="text-start p container">But none of these commercials talked about the hours of hard work required to get that blinding whiteness. Do the words ‘enzyme soak’, hot water cleaning’, ‘bluing’ ring a bell? How we wish maintaining ourwhite clothes was easy as watching those commercials. With UClean, 
   <super>it is Easier!</super><br></br>
   <Marginer direction="vertical" margin="1em" />

At UClean, we bring the best-in-class Laundry, Dry Cleaning <br></br>and Home Cleaning Services at your doorstep!<br></br>
<Marginer direction="vertical" margin="1em" />

UClean operates a network of over 300+ mini laundromats across 85+ cities, making <bold>it the Largest Laundry & Dry-Cleaning Chain in India. Your nearest UClean store offerslive laundry, steam ironing and dry-cleaning services, with freehome pick & drop, and a promise to deliver your clothes in less than 24 hours*.</bold></h6></div>
 </div>
 </div>

 <div className="promise container-fluid">
 <Marginer direction="vertical" margin="4em" />
<SectionTitle><div className="text-center container">Our Promise</div></SectionTitle>
<Marginer direction="vertical" margin="3em" />

<div class="container text-center">
 <div class="row ">
   <div class="col-sm">
   <img src={medal} className="img-fluid" height={100} width={100}/>
   <Marginer direction="vertical" margin="2em" />
   <h3>Quality</h3>
   <Marginer direction="vertical" margin="1em" />
   <p>Expert professionals <br></br>handling
your clothes with utmost care.</p>
   </div>
   <div class="col-sm">
   <img src={search} className="img-fluid" height={100} width={100}/>
   <Marginer direction="vertical" margin="2em" />
   <h3>Transparency</h3>
   <Marginer direction="vertical" margin="1em" />
   <p>  Neighbourhood live laundry stores<br></br>
offering service as you please.</p>
 
   </div>
   <div class="col-sm">
   <img src={speed} className="img-fluid" height={100} width={100}/>
   <Marginer direction="vertical" margin="2em" />
   <h3>Speed</h3>
   <Marginer direction="vertical" margin="1em" />
  <p>Shorter turnaround times, delivery<br></br>
within24 hours of pick up.</p> 
   </div>
   </div>
 </div></div>
  
<div className="Aim container-fluid">
<Marginer direction="vertical" margin="3em" /> 
<div class="container text-center">
 <div class="row ">
   <div class="col-sm">
   <img src={aim} className="img-fluid circle" height={50} width={50}/>
   <h3>We Aim</h3>
 
   <h5>To provide all cleaning solutions on a click</h5>
   </div>
   <div class="col-sm">
   <img src={stars} className="img-fluid circle" />
   <h3>We Aspire</h3>
   <h5> To become India’s largest and most preferred brand </h5>

   
 
   </div>
   </div>
 </div></div>
</ServicesContainer>



 <ServicesContainer name="servicesSection">
<SectionTitle>People Behind</SectionTitle>
     <Marginer direction="vertical" margin="1em" />
   <OurSerivce
     title="Apurv Srivastav"
     description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi consectetur dolor omnis ratione porro rerum ducimus laudantium, iure dolores hic."
     imgUrl={apurv}
   />
   <OurSerivce
     title="Apekshit Yadav"
     description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi consectetur dolor omnis ratione porro rerum ducimus laudantium, iure dolores hic."
     imgUrl={apekshit}
     isReversed
   />

<OurSerivce
     title="Jinan Abdullah Khan"
     description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi consectetur dolor omnis ratione porro rerum ducimus laudantium, iure dolores hic."
     imgUrl={jinan}
   />
  

     </ServicesContainer>

      </div>
     <Footer/>
     </div>
      }
     
      </>

     
        
    )
}
  