import React from "react";

import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Ceremics from "./components/Ceremics";
import Benefit from "./components/Benefit";
import Touch from "./components/Touch";
import Popular from "./components/Popular";




export default function Home(){
  return(
    <div>
      
      
    
      <Hero/>
      
      <Brand/>
      <Ceremics/>
      <Popular/>
      <Benefit/>
      <Touch/>
      
    </div>
  )
}