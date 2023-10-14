import React from 'react'
import serviceImg from '../../assets/doctor-3.png'
import TabContainer from './TabContainer'

export default function Service() {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <div>
            <img src={serviceImg} alt="" />
        </div>
        <div className='mt-4 mb-4'>
            <h2 className='text-5xl font-bold mb-2'>Our Services</h2>
            <TabContainer></TabContainer>
        </div>
    </div>
  )
}
