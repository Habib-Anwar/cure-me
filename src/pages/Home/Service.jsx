import React from 'react'
import serviceImg from '../../assets/doctor-3.png'
import TabContainer from './TabContainer'
import { HiOutlineClock, HiOutlineMapPin, HiPhoneArrowUpRight } from "react-icons/hi2";
import MyCarousel from './MyCarousel';


export default function Service() {
  return (
    <>
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 max-w-screen-xl mx-auto'>
        <div>
            <img src={serviceImg} alt="" />
        </div>
        <div className='mt-4 mb-4'>
            <h2 className='text-3xl font-bold mb-2'>Our Services</h2>
            <p className='mb-2'>Develop a user-friendly website interface that allows patients to easily search for doctors, view their availability, and schedule appointments online. The platform is to be intuitive and responsive for a seamless user experience.</p>
            <TabContainer></TabContainer>
        </div>
    </div>
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 mt-8'>
    <div className="card w-96 bg-info text-primary-content">
  <div className="card-body hover:text-white">
    <h2 className="card-title"> <span className='text-3xl'><HiOutlineClock></HiOutlineClock></span> Opening Hours</h2>
    <p>Open 9.00 am to 5.00pm Everyday</p>
  </div>
</div>
    <div className="card w-96 bg-error text-primary-content">
  <div className="card-body hover:text-white">
    <h2 className="card-title"><HiOutlineMapPin className='text-3xl'></HiOutlineMapPin> Our Locations</h2>
    <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
  </div>
</div>
    <div className="card w-96 bg-info text-primary-content">
  <div className="card-body hover:text-white">
    <h2 className="card-title"><HiPhoneArrowUpRight className='text-3xl'></HiPhoneArrowUpRight>Contact Us</h2>
    <p>+88 01750 00 00 00 </p>
<p className='-mt-2'>+88 01750 00 00 00</p>
  </div>
</div>
    </div>
    <div>
      <MyCarousel></MyCarousel>
    </div>
    </>
  )
}
