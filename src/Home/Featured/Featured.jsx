import React from 'react';
import img from '../../assets/home/featured.jpg'
import Title from '../../Components/Title/Title';
import './Featured.css'
const Featured = () => {
    const currentYear = ()=>{
        return new Date().getFullYear()
    }
    return (
        <div className='featured-image bg-fixed text-white '>
            
          <div className='bg-black/25 p-16'>
          <Title
           subHeading={"Check it out"}
           Heading={"FROM OUR MENU"}
           ></Title> 
           <div className='md:flex justify-between items-center space-x-8  text-white'>
            <img className='w-[650px] border-white border-2 shadow-inner' src={img} alt="" />
            <div className='space-y-2'>
                <p className='text-xl'>May 27, {currentYear()}</p>
                <p className='text-2xl'>WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere illum vel accusamus odit? Sint quo natus enim odit alias perspiciatis ea laboriosam eius quae. Neque sunt culpa possimus nobis expedita.</p>
                <button className='btn btn-outline border-0 border-b-4 text-xl'>Read More</button>
            </div>
           </div>
          </div>
        </div>
    );
};

export default Featured;