import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import "./serviceSection.css"
import Service1Img from "./Assets/illustrations1.png";
import Service3Img from "./Assets/illustrations3.png";
import Service2Img from "./Assets/illustrations2.png";
import Service4Img from "./Assets/illustrations4.png";
import { Marginer } from "./components/marginer";
import { OurSerivce } from "./components/ourService";
import { SectionTitle } from "./components/sectionTitle/index";
import servicek from "./Assets/servicek.gif"
import savings from "./Assets/savings.svg"
import like from "./Assets/like.svg"
import shirt from "./Assets/shirt.svg"
import bucket from "./Assets/bucket.svg"
import process from "./Assets/process.webp"


import Footer from "./components/footer/Footer"
import ScaleLoader from 'react-spinners/ScaleLoader';
import port from "./Assets/port.jpg"

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
 
`;




export function ServicesSection(props) {
  
  
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


<div className="service_background container">

<div className="hover-zoom">
<img src={port} className="text-center container img-fluid "/>
</div>

</div>
<ServicesContainer name="servicesSection">

<SectionTitle>Our Services</SectionTitle>
<Marginer direction="vertical" margin="1em" />
<OurSerivce
title="Virtual Interaction"
description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi consectetur dolor omnis ratione porro rerum ducimus laudantium, iure dolores hic."
imgUrl={Service1Img}
/>
<OurSerivce
title="Self Customaization"
description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi consectetur dolor omnis ratione porro rerum ducimus laudantium, iure dolores hic."
imgUrl={Service4Img}
isReversed
/>
<OurSerivce 
title="Quality Assured Work"
description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi consectetur dolor omnis ratione porro rerum ducimus laudantium, iure dolores hic."
imgUrl={Service3Img}


/>


<OurSerivce
title="Doorstep Delivery"
description="We shape and build your imaginations into reality.Join us now on this adventure"
imgUrl={Service2Img}
isReversed
/>



<div className="service">
<Marginer direction="vertical" margin="4em" />
<div class="container text-center">
<div class="row ">
<div class="col-md-4 p"> 


<img src={servicek}  className="img-fluid rounded text-start"/>

<Marginer direction="vertical" margin="3em" />

</div>
<div class="col-sm-8"><h6 className="container p text-start ">
<SectionTitle>LAUNDRY</SectionTitle>
The laundry process at Laundry Cafe begins by sorting the clothes. After sorting, similar clothes are washed together. The best detergent brands are used for washing clothes. The washing machine is then loaded by adjusting the right setting for your clothes. The freshwater rinse during the process helps in eliminating the dirt and stains from the clothes. We air-dry your clothes in anti-bacterial stainless-steel air-dryers that eliminate Direct UV rays from the sun which react with the colour pigments of your clothes and create bleaching effect. After the laundry cycle ends,High pressure vacuum steam iron is done for that perfect finishing . As per CDC and WHO, steam sterilization is best and safest way to sanitize your clothes.


</h6></div>
</div>
</div>
</div>


<Marginer direction="vertical" margin="5em" />
<div class="container text-center">
<div class="row ">
<div class="col-sm">
<img src={savings} className="img-fluid" height={100} width={100}/>
<Marginer direction="vertical" margin="2em" />

<p>Affordable Rates</p>
</div>
<div class="col-sm">
<img src={like} className="img-fluid" height={100} width={100}/>
<Marginer direction="vertical" margin="2em" />

<p>  Skin Friendly</p>

</div>
<div class="col-sm">
<img src={shirt} className="img-fluid" height={100} width={100}/>
<Marginer direction="vertical" margin="2em" />

<p>UV Safe Air Drying</p> 
</div>

<div class="col-sm">
<img src={bucket} className="img-fluid" height={100} width={100}/>
<Marginer direction="vertical" margin="2em" />

<p>Uses less & Fresh Water</p> 
</div>
</div>
<Marginer direction="vertical" margin="5em" />
<button type="button" class="btn btn-primary  btn-lg">Place Order</button>
</div>
<Marginer direction="vertical" margin="5em" />
<div className="process">
<Marginer direction="vertical" margin="3em" />
<SectionTitle>Laundry Process</SectionTitle>
<Marginer direction="vertical" margin="5em" />
<img src={process} className="text-center container"/>

</div>
</ServicesContainer>
<Footer/>
</div>
     }
 
   </>
      
      
    
    )
}