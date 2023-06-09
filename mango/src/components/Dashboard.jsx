import React    ,          { useEffect, useState } from 'react'
import Sidebar        from './sidebar/Sidebar'
import Footer         from "../components/footer/Footer"
import welcome        from "../Assets/welcome.jpg"
import { FadeLoader } from 'react-spinners'
import "./Dashboard.css"
function Dashboard() {

 
const [loading,setLoading] = useState(false);

useEffect(() => {
  setLoading(true)

  setTimeout(() => {
   setLoading(false)
  },0)
}, [])
  return (
    
    <>
    {
 loading ?
 <div className = 'loader'>

 <FadeLoader color = {"black"} size = {100} loading = {loading}/>
 </div>

: 
          <>
          <Sidebar />


          <section className = "topdash"><h1>WELCOME TO DASH</h1></section>
          <div     class     = "container">
          <div     className = 'box oneb' >
                    
                       services
                       
                    
                </div>

                <div className = 'box twob' >
                     
                       history
                     
                </div>

                <div className = 'box threeb' >
                    
                        profile
                     
                </div>
                
              </div>



          <Footer />
                 </>

}
</>
  )
}

export default Dashboard