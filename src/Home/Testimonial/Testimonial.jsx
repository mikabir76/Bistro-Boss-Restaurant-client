import React, { useEffect, useState } from 'react';
import Title from '../../Components/Title/Title';
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import qoute from '../../assets/Group.png'
const Testimonial = () => {
const [reviews, setReviews] = useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data =>{
        setReviews(data)
    })
},[])

    return (
        <div className='my-16'>
          <div>
            <Title
            subHeading={"What your Client Say"}
            Heading={"testimonials"}
            ></Title>
            </div> 
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       {
        reviews.map(review => <SwiperSlide
        key={review._id}
        >
            
            <div>
            <Rating className='mx-auto mb-2' readOnly style={{ maxWidth: 200 }} value={review.rating}  />
                <img className='mx-auto my-5' src={qoute} alt="" />
                <p className='px-16 text-center text-xl mb-2'>{review.details}</p>
                <h1 className='text-4xl text-center font-mono text-yellow-500'>{review.name}</h1>
            </div>
        </SwiperSlide> )
       }
      </Swiper> 
        </div>
    );
};

export default Testimonial;