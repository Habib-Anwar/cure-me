import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function MyCarousel() {
  return (
    <div className="max-w-screen-xl mx-auto mt-8">
       <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
          <div className='flex'>
  <div className="px-10 pt-10">
    <img src="https://i.ibb.co/zQp0fL5/man1.jpg" alt="Ben" className="rounded-full w-[70px]" />
  </div>
  <div className="card-body items-center text-center mr-20">
    <h2 className="card-title">Ben Stokes</h2>
    <p>Product Designer</p>
     <h3 className="text-7xl font-bold space-x-0">❛ ❛</h3>
    </div>
    </div>
  <p className='p-6 -mt-20'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
 
</div>
</SwiperSlide>
<SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
          <div className='flex'>
  <div className="px-10 pt-10">
    <img src="https://i.ibb.co/S613rkP/female1.jpg" alt="Lucky" className="rounded-full w-[70px]" />
  </div>
  <div className="card-body items-center text-center mr-20">
    <h2 className="card-title">Lucky Anderson</h2>
    <p>Brand Manager</p>
     <h3 className="text-7xl font-bold space-x-0">❛ ❛</h3>
    </div>
    </div>
  <p className='p-6 -mt-20'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
 
</div>
</SwiperSlide>
<SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
          <div className='flex'>
  <div className="px-10 pt-10">
    <img src="https://i.ibb.co/KqnY1C5/female2.jpg" alt="White" className="rounded-full w-[70px]" />
  </div>
  <div className="card-body items-center text-center mr-20">
    <h2 className="card-title">Gabriella White</h2>
    <p>Marketing Executive</p>
     <h3 className="text-7xl font-bold space-x-0">❛ ❛</h3>
    </div>
    </div>
  <p className='p-6 -mt-20'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
 
</div>
</SwiperSlide>
<SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
          <div className='flex'>
  <div className="px-10 pt-10">
    <img src="https://i.ibb.co/72R29pQ/man2.jpg" alt="Smith" className="rounded-full w-[60px]" />
  </div>
  <div className="card-body items-center text-center mr-20">
    <h2 className="card-title">Stive Smith</h2>
    <p>Model</p>
     <h3 className="text-7xl font-bold space-x-0">❛ ❛</h3>
    </div>
    </div>
  <p className='p-6 -mt-20'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
 
</div>
</SwiperSlide>
      </Swiper>
    </div>
  )
}
