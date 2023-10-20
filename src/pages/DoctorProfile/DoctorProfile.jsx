import React from 'react'
import NavBar from '../Shared/NavBar/NavBar'
import DoctorTabs from './DoctorTabs'

export default function DoctorProfile() {
  return (
    <div>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/ggXfKW3/bgimage.jpg)'}}>
      
      <div className="hero-overlay bg-opacity-60"></div>
      
      <div className="hero-content text-center text-white">
        
        <div className="max-w-md">
          <div className='-mt-4 lg:-mt-40'>
  
        <NavBar></NavBar>
          </div>
          <div className='mt-40'>
          <div className='w-full lg:-ml-96'>
          <p className="mb-2"> Home / Doctor Profile </p>
          <h1 className="mb-5 text-5xl font-bold">Doctor Profile</h1>
          
          </div>
          </div>
        </div>
      </div>
    </div>
    <DoctorTabs></DoctorTabs>
    </div>
  )
}
