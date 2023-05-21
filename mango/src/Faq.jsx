import React, { useEffect, useState } from 'react'

import ScaleLoader from 'react-spinners/ScaleLoader';
import Footer from './components/footer/Footer';
import "./Faq.css"




function Faq() {


    const [loading,setLoading]= useState(false);
 useEffect(() => {
   setLoading(true)
 
   setTimeout(() => {
    setLoading(false)
   },2300)
 }, [])

 const [msg, setMsg] = useState({
    name : "",
    email : "",
    message : ""
  });

  // Handle Inputs
  const handleChange = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setMsg({...msg, [name]:value});
  }

  // Handle Submit
  const handleSubmit = async (event)=>{
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variables
    const {name, email, message} = msg;
    try {
      //It is Submitted on port 3000 by default
      // Which is Front End but we need to 
      // Submit it on Backend which is on 
      // Port 3001. So we need Proxy.
      const res = await fetch('/message', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          name, email, message
        })
      })
      console.log(res.status)
      if(res.status === 400 || !res){
        window.alert("Message Not Sent. Try Again Later")
      }else{
        // You need to Restart the Server for Proxy Works
        // Now Try Again
        window.alert("Message Sent");
        setMsg({
          name : "",
          email : "",
          message : ""
        })
        
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div >
        {
            loading ?
            <div className='loader'>

            <ScaleLoader color={"#33a3c5"} size={100} loading={loading}/>
            </div>
    :
   <div>
     <div class="container col-sm-8">
   <h1 className='fs-1 fw-bold  text-center'>FAQ</h1>
    <div class="accordion" id="accordionSection">
        <div class="accordion-item mb-3">
            <h2 class="accordion-header">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">How do i schedule a pickup</button></h2>
            <div class="accordion-collapse collapse" id="collapseOne" data-bs-parent="#accordionSection">
                <div class="accordion-body text-start">
                You can download our App and schedule your laundry pick-up. Else, simply go online and click away.
                </div>
            </div>

        </div>
        <div class="accordion-item  mb-3">
            <h2 class="accordion-header">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">What aer your store timings?</button></h2>
            <div class="accordion-collapse collapse" id="collapseTwo" data-bs-parent="#accordionSection">
                <div class="accordion-body text-start">
                Bangalore: We are open from 9:30 am to 9:30 pm. We are closed on Wednesdays.<br></br>

Hyderabad: We are open from 9:30 am to 9:30 pm. We are closed on Wednesdays.<br></br>

Kochi: We are open from 9:30 am to 8:30 pm; all days of the week.<br></br>

Kalaburagi: We are open from 9:30 am to 8:30 pm; all days of the week.
                </div>
            </div>

        </div>
        <div class="accordion-item mb-3">
            <h2 class="accordion-header">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">Do you also provide dry wash</button></h2>
            <div class="accordion-collapse collapse" id="collapseThree" data-bs-parent="#accordionSection">
                <div class="accordion-body text-start">
                Yes, we do provide Dry Wash and Shoe Cleaning services as well. Just let our pick-up executive know.
                </div>
            </div>

        </div>

        <div class="accordion-item mb-3">
            <h2 class="accordion-header">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefour">Can i check my order history?</button></h2>
            <div class="accordion-collapse collapse" id="collapsefour" data-bs-parent="#accordionSection">
                <div class="accordion-body text-start">
                Your order history is available in the app. Open The Laundry Basket on your phone and tap the basket icon at the bottom – that will show you any open or previous orders. From here you can tap on an order and check your order details.
                </div>
            </div>

        </div>

        <div class="accordion-item mb-3">
            <h2 class="accordion-header">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefive">Do yiou provide an iron only srvice?</button></h2>
            <div class="accordion-collapse collapse" id="collapsefive" data-bs-parent="#accordionSection">
                <div class="accordion-body text-start">
                An iron only service has been a popular request here at The Laundry Basket and so we have introduced an “Iron Only” service. However the charges for Only Iron Services are different. Please visit our pricing page to get complete details.
                </div>
            </div>
            </div>
  
            <div class="accordion-item mb-3">
            <h2 class="accordion-header">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsesix">What chemicals and detergents do you use?</button></h2>
            <div class="accordion-collapse collapse" id="collapsesix" data-bs-parent="#accordionSection">
                <div class="accordion-body text-start">
                Here at The Laundry Basket, for laundry, we use our in-house developed detergent along with additives such as Vanish, Comfort Fabric Conditioners, Rin Ala and other standard over the counter detergents available in the supermarkets. Our in-house detergents are certified bio-degradable and environment friendly.

For Dry Cleaning, we use a new technology called 'Wet Cleaning'. Wet cleaning refers to methods of professional cleaning that, in contrast to traditional dry cleaning, avoids the use of chemical solvents, the most common of which is tetrachloroethylene (commonly called perchloroethylene or "perc").

Environmental groups and the United States Environmental Protection Agency have indicated that such alternative "wet cleaning" methods are better for the environment than perc, and proponents of wet cleaning state that these methods can be used without shrinking or otherwise damaging garments that typically require dry cleaning.

Unfortunately we cannot take requests for specific detergents as both are automatically added with our high tech machinery.
                </div>
            </div>

</div>

<div class="accordion-item mb-3">
            <h2 class="accordion-header">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseseven">What happens if clothes in my wash order are damaged?</button></h2>
            <div class="accordion-collapse collapse" id="collapseseven" data-bs-parent="#accordionSection">
                <div class="accordion-body text-start">
                Any items determined to have been damaged/ lost by The Laundry Basket will be reimbursed in accordance with the International Fabricare Fair Claims Guide and shall not exceed ten (10) times our charge for cleaning that garment regardless of brand or condition. Before you contact us about damages, please see our terms of service.
                </div>
            </div>

</div>
</div>

<p className=' fs-2 text-center'>Having any doubts?  Contact Us</p>
<form  onSubmit={handleSubmit} method="POST" className='form'>
<div class="mb-1">
<div class="mb-1">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter your name" value={msg.name}  onChange={handleChange} name="name"/>
</div>
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter your email" value={msg.email}   onChange={handleChange} name="email"/>
</div>
<div class="mb-1 ">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Type your message' rows="3" value={msg.message}  onChange={handleChange} name="message"></textarea>

</div>
<button type="submit" class="btn btn-primary">Send message</button>
</form>
        
</div>
<Footer/>
    </div>
   
        }
      
        </div>
        
   
  )
}

export default Faq