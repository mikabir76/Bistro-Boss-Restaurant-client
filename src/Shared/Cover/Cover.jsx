import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({img, title, subTitle}) => {
    return (

      <Parallax
      blur={{ min: -40, max: 40 }}
      bgImageSize={100}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
      className='mb-16'
  >
     <div className='my-16 py-48' >
        <div className=' text-center bg-black/50 rounded-md  w-3/4 mx-auto space-y-2 p-16' >
          <h1 className='uppercase text-4xl text-white font-bold font-mono'>{title}</h1>
          <p className='text-white text-xl font-semibold'>{subTitle}</p>
          </div>  
      </div>
  </Parallax> 
    );
};


export default Cover;