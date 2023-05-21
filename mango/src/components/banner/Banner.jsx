import React from 'react'
import "./Banner.css"
import Marquee from "react-fast-marquee";

function Banner() {
  return (
    <div className=' banner_header '><Marquee speed={100} gradient={false}>INDIA’S NO. 1 LAUNDRY & DRY-CLEANING
    BRAND </Marquee> </div>
  )
}

export default Banner