import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import './MoveImg.css'
import docImg1 from '../../../assets/images/doc1.png'
import docImg2 from '../../../assets/images/doc2.jpg'
import docImg3 from '../../../assets/images/doc3.jpg'

export default function MoveImg() {
  return (
    <div>
        <ScrollAnimation animateIn='fadeIn'
    animateOut='fadeOut'>
  
  </ScrollAnimation>
  <ScrollAnimation animateIn='bounceInRight animate__slideInUp'
    animateOut='bounceOutLeft'>
   
    <div className=''>

   
    <div className='rhombus-container -mb-28 -ml-8'>
    <img src={docImg1} alt="" className='animate__animated animate__bounce rhombus-image ' />
    
    </div>
    <div className=' rhombus-container ml-12'>
    <img src={docImg2} alt="" className='animate__animated animate__bounce rhombus-image' />
    
    </div>
    <div className='rhombus-container -mt-80 ml-44'>
    <img src={docImg3} alt="" className='animate__animated animate__bounce rhombus-image' />
    
    </div>
    </div>
  </ScrollAnimation></div>
  )
}
