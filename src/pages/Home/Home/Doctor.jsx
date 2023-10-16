import React, { useEffect, useState } from 'react'
import HomeCard from './HomeCard';

export default function Doctor() {
    const [cards, setCards] = useState([]);
    useEffect(() =>{
     fetch('doctor.json')
     .then(res => res.json())
     .then(data => setCards(data))
    }, [])
  return (
    <>
    <div className='max-w-screen-xl mx-auto text-center mt-6'>
    <h2 className='text-3xl font-bold mb-4'>Our Expert Doctors</h2>
    <p>Our doctors are highly trained and knowledgeable medical professionals who have acquired specialized skills and expertise in their respective fields of medicine. They play a crucial role in the healthcare system, as they are often sought after for their advanced understanding of specific medical conditions, treatment methods, and surgical procedures.</p>
    </div>
  
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3'>
        {
            cards.map(card =><HomeCard
        
           card={card}></HomeCard>)
        }
    </div>
    </>
  )
}
