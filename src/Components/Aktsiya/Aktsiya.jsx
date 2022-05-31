import React from 'react'
import '../../Style/Aktsiya/Aktsiya.scss'
import Carusel from '../Home/Carusel'
import '../../Style/Home/Catagory.scss'
const Aktsiya = () => {
  return (
    <div>
        <div className="container-xl caruselContainer pb-5 mb-5" >
         <div className="title">
             <p>Распродажа</p>
         </div>
        
         <Carusel/>
         </div>
       
    </div>
  )
}

export default Aktsiya