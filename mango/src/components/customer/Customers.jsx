import React from 'react'

import "./Customers.css"
import profile1 from "../../Assets/avatar1.svg"
import profile2 from "../../Assets/avatar2.svg"
import profile3 from "../../Assets/avatar3.svg"
import { Marginer } from '../marginer'
function Customers() {

  return (
    <div>
  
 
 <div class="container-xl">
	<div class="row">
		<div class="col-lg-8 mx-auto">
			<h2>Testimonials</h2>

<Marginer direction="vertical" margin="1em" />
<p className='fs-5 text-center'>Our Customers love us.Have a look at what they have to say.</p>

<Marginer direction="vertical" margin="1em" />
			<div id="myCarousel" class="carousel slide" data-ride="carousel" >
		
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>   
			
				<div class="carousel-inner">
					<div class="carousel-item active"  data-bs-interval="500">
						<div class="img-box"><img src={profile1} alt=""/></div>
						<p class="testimonial">The best laundry service I ever got! The manager, Yash, was very good at communication and they delivered the clothes within a day! Also got some discount on the bulk order. Thanks to the team. Cheers! Keep up the good work</p>
						<p class="overview"><b>Ananya Kilka</b>,Social worker</p>
					</div>
					<div class="carousel-item"  data-bs-interval="2000">
						<div class="img-box"><img src={profile2} alt=""/></div>
						<p class="testimonial">The best laundry service I ever got! The manager, Yash, was very good at communication and they delivered the clothes within a day! Also got some discount on the bulk order. Thanks to the team. Cheers! Keep up the good work</p>
						<p class="overview"><b>Ranjiv Singh</b> ,Media Analyst</p>
					</div>
					<div class="carousel-item">
						<div class="img-box"><img src={profile3} alt=""/></div>
						<p class="testimonial"> The best laundry service I ever got! The manager, Yash, was very good at communication and they delivered the clothes within a day! Also got some discount on the bulk order. Thanks to the team. Cheers! Keep up the good work</p>
						<p class="overview"><b>Mahesh Karn</b>,Student</p>
					</div>
				</div>
				<a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
					<i class="fa fa-angle-left"></i>
				</a>
				<a class="carousel-control-next" href="#myCarousel" data-slide="next">
					<i class="fa fa-angle-right"></i>
				</a>
			</div>
		</div>
	</div>
</div>
<Marginer direction="vertical" margin="3em" />

    </div>
  )
}

export default Customers