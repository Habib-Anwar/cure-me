import { HiCalendar, HiOutlineCurrencyDollar, HiOutlineMapPin } from "react-icons/hi2";
import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({card}) => {
    const {name, title, location, availability, fee, rating, image_url} = card
  return (
    <div className='mx-auto mt-8 mb-8'>
        <img
          alt='home-img'
          className='w-[325px] h-[200px] rounded-lg'
          src={image_url}
        />
      <h2 className='text-gray-900 title-font text-md font-medium'>
        {name}
        </h2>
        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
          {title}
        </h3>
      <div className='mt-4 mb-4'>
        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-2 flex gap-3'>
         <HiOutlineMapPin className="text-xl"></HiOutlineMapPin>{location}
        </h3>
        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1 flex gap-3'>
         <HiCalendar className="text-xl"></HiCalendar> {availability}
        </h3>
        <p className='mt-2 text-gray-500 text-xs tracking-widest title-font flex gap-3'>
            <HiOutlineCurrencyDollar className="text-xl"></HiOutlineCurrencyDollar> {fee}</p>
      </div>
      <Link to='/doctorProfile'>
      <button className="btn btn-outline btn-error w-full">View Profile</button>
      </Link>
    </div>
  )
}

export default HomeCard