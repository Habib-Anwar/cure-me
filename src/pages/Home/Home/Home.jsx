import React from 'react'
import NavBar from '../../Shared/NavBar/NavBar'
import './Home.css'
import MoveImg from '../Home/MoveImg'
import Service from '../Service'





export default function Home() {
  return (
    <>
    <div> <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/ggXfKW3/bgimage.jpg)'}}>
      
    <div className="hero-overlay bg-opacity-60"></div>
    
    <div className="hero-content text-center text-white">
      
      <div className="max-w-md">
        <div className='-mt-56'>

      <NavBar></NavBar>
        </div>
        <div className='grid grid-cols-2 gap-48 mt-40'>
        <div className='-ml-72'>
        <h1 className="mb-5 text-5xl font-bold">Your Best Medical Help Center</h1>
        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary">All Service</button>
        </div>
        <div className='mt-8'>
<MoveImg></MoveImg>
        </div>
        </div>
      </div>
    </div>
  </div>
 <Service></Service>
  </div>
  </>
  )
}
