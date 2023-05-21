import React from 'react'
import { Link } from 'react-router-dom'
import error from "../Assets/404.png"

import back from "../Assets/back.png"
function ErrorPage() {
  return (
    <div>

<div className='container text-center' > <img src={error} alt="" className='text-center img-fluid'  width={800}/></div>
<div className='container text-center' > <p><Link to="/" style={{textDecoration:"none",color:"grey"}}><img src={back} alt=""  width={20} height={20} className="text-center img-fluid " style={{cursor:"pointer"}}/> Back to HomePage</Link></p></div>


</div>
    
  )
}

export default ErrorPage