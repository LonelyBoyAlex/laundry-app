import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar/Sidebar'
import welcome from "../Assets/welcome.jpg"
import { FadeLoader } from 'react-spinners'
import "./Dashboard.css"
function Dashboard() {

 
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

 <FadeLoader color={"black"} size={100} loading={loading}/>
 </div>
:
    <div>
            <Sidebar/>
        <div className='container text-center heading fs-1' style={{color:"rgb(44, 103, 211)"}} ><img src={welcome} className="container img-fluid text-center logo"/> </div>
        
    </div>
}
</>
  )
}

export default Dashboard