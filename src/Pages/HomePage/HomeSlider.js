import React, { useState } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


//import image 
import imageOne from '../../images/carosel/image-1.png'
import imageTwo from '../../images/carosel/image-2.png'
import imageThree from '../../images/carosel/image-3.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'



const HomeSlider = () => {
    const [sliderData, setSliderData] = useState([
        {
            id: 1,
            tittle: "Hello,",
            desc: "Welcome to you in Torq Bicycle, A leading manufacture company.",
            img: imageOne
        },
        {
            id: 2,
            tittle: "We are leading the market",
            desc: "Our company in one of the best company for manufacture bicycle.",
            img: imageTwo
        },
        {
            id: 3,
            tittle: "Now we are exporting our products worldwide",
            desc: "We are now dealing with global clients and success rate is tremendous!",
            img: imageThree
        },
    ])




    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            {
                sliderData.map(sData =>
                    <SwiperSlide key={sData?.id}>
                        <div className='relative'>
                            <img className='md:h-[35rem] lg:h-[35rem] object-center object-cover overflow-hidden w-full' src={sData?.img} alt="" />
                            <div
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1300"
                                data-aos-easing="ease-in-out"
                                className='absolute bottom-6 left-0 md:bottom-16 md:left-14 bg-orange-200 p-2 md:p-10'>
                                <h1 className='md:text-4xl text-md font-bold uppercase'>{sData?.tittle}</h1>
                                <p className='text-black md:text-xl text-xs'>{sData.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
        </Swiper>
    );
};

export default HomeSlider;