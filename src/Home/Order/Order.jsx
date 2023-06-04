import React from 'react';
import Title from '../../Components/Title/Title';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'
import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'
import slider5 from '../../assets/home/slide5.jpg'

const Order = () => {
    return (
        <div className='mb-16'>
            
        <div>
            <Title
            subHeading={"From 11.00 am to 10.00 pm"}
            Heading={"Order Online"}
            ></Title>

        </div>
        <div>
                <Swiper
                    slidesPerView={4}
                    
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slider1} alt="" />
                        <p className='uppercase ml-20 font-mono tracking-widest text-gray-500  -mt-20 text-3xl font-semibold'>Salads</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={slider2} alt="" />
                    <p className='uppercase ml-20 font-mono tracking-widest text-gray-500  -mt-20 text-3xl font-semibold'>pizzas</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="" />
                        <p className='uppercase ml-20 font-mono tracking-widest text-gray-500  -mt-20 text-3xl font-semibold'>soups</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={slider4} alt="" />
                    <p className='uppercase ml-20 font-mono tracking-widest text-gray-500  -mt-20 text-3xl font-semibold'>desserts</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={slider5} alt="" />
                    <p className='uppercase ml-20 font-mono tracking-widest text-gray-500  -mt-20 text-3xl font-semibold'>Salads</p>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
};

export default Order;
