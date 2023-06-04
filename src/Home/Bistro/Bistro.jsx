import React from 'react';
import bossImg from '../../assets/home/chef-service.jpg'
import './Bistro.css'
const Bistro = () => {
    return (
        <div className='my-16 py-36  bistro-image'style={{ backgroundImage: `url("${bossImg}")` }} >
          <div className=' text-center bg-white/90 rounded-md border-2 border-black w-3/4 mx-auto space-y-2 p-16' >
            <h1 className='uppercase text-4xl font-bold font-mono'>Bistro Boss</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eum nam. Nihil doloribus natus quidem maxime quis omnis minima, quas dicta quos sequi asperiores explicabo vel culpa ipsa rerum minus fugit in recusandae hic perferendis.</p>
            </div>  
        </div>
    );
};

export default Bistro;